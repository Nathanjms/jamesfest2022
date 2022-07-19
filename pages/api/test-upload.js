import { Storage } from "@google-cloud/storage";
import { IncomingForm } from "formidable";

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Process a POST request
    res.status(404).json({ message: "Not Found" });
    return;
  }
  const storeFile = (file) => {
    bucket.upload(file.filepath, function (err, file, apiResponse) {
      // Your bucket now contains:
      // - "image.png" (with the contents of `/local/path/image.png')
      // `file` is an instance of a File object that refers to your new file.
      // console.log(err, file, apiResponse);
    });
  };
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });
  const bucket = storage.bucket(process.env.BUCKET_NAME);
  try {
    const result = await asyncParse(req);

    const files = result.files?.assets;
    if (!files) {
      // Process a POST request
      res.status(400).json({ message: "No Files found" });
      return;
    }

    // TODO: limit to 10 files
    console.log(files.length);

    if (!files?.length) {
      storeFile(files);
    } else {
      files.forEach((file) => storeFile(file));
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err?.message ?? "Error :c" });
  }
}
