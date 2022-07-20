import { Storage } from "@google-cloud/storage";
import { IncomingForm } from "formidable";
import { withSessionRoute } from "../../lib/withSession";

export const config = {
  api: {
    bodyParser: false,
  },
};

const asyncParse = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true, keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

const storage = new Storage({
  projectId: process.env.PROJECT_ID,
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
});
const bucket = storage.bucket(process.env.BUCKET_NAME);

const storeFiles = async (files) => {
  let promises = [];

  for (const file of files) {
    promises.push(doUpload(file));
  }
  try {
    await Promise.all(promises);
    return Promise.resolve();
  } catch (e) {
    throw new Error(JSON.stringify(e) ?? "Error Uploading Files");
  }

  async function doUpload(file) {
    let response = await bucket.upload(file.filepath);
    if (response.err) {
      throw new Error(JSON.stringify(response.err) ?? "Error Uploading Files");
    }
  }
};

export const handler = withSessionRoute(async (req, res, session) => {
  if (req.method !== "POST") {
    // Process a POST request
    res.status(404).json({ message: "Not Found" });
    return;
  }
  if (!req?.session?.user?.authenticated) {
    res.status(401).json({ message: "Unauthorised" });
    return;
  }

  try {
    const result = await asyncParse(req);
    const files = result.files?.assets;
    if (!files) {
      // Process a POST request
      res.status(400).json({ message: "No Files found" });
      return;
    }
    if (files.length > 10) {
      res.status(400).json({ message: "Maximum number of photos is 10." });
      return;
    }

    let filesArray = [];
    if (!files?.length) {
      filesArray = [files];
    } else {
      filesArray = files;
    }

    if (filesArray.some(file => file.size > 5000000)) {
      res.status(400).json({ message: "Maximum file size per file is 5Mb" });
      return;
    }

    await storeFiles(filesArray);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ debug: err?.message ?? "Error :c" });
  }
});

export default handler;
