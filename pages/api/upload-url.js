import { Storage } from "@google-cloud/storage";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Process a POST request
    res.status(404).json({ message: "Not Found" });
    return;
  }
  try {
    const files = req.body;
    if (!files) {
      // Process a POST request
      res.status(403).json({ message: "No Files found" });
      return;
    }

    // TODO: limit to 10 files

    const storage = new Storage({
      projectId: process.env.PROJECT_ID,
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
      },
    });
    const bucket = storage.bucket(process.env.BUCKET_NAME);

    bucket.upload(files.path, function (err, file, apiResponse) {
      // Your bucket now contains:
      // - "image.png" (with the contents of `/local/path/image.png')

      // `file` is an instance of a File object that refers to your new file.
      console.log(err, file, apiResponse);
    });
    const response = res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error?.message ?? "Error :c");
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};
