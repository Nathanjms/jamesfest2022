import { Storage } from "@google-cloud/storage";
import { withSessionRoute } from "../../../lib/withSession";

const imgPath = "https://storage.googleapis.com/jamesfest/";

export const handler = withSessionRoute(async (req, res, session) => {
  if (req.method !== "GET") {
    // Process a POST request
    res.status(404).json({ message: "Not Found" });
    return;
  }
  if (!req?.session?.user?.authenticated) {
    res.status(401).json({ message: "Unauthorised" });
    return;
  }

  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });
  const bucket = storage.bucket(process.env.BUCKET_NAME);

  const maxResults = req.query?.maxResults ?? 12;

  let getFilesOptions = {
    maxResults: maxResults,
    autoPaginate: false,
  };

  if (req.query?.pageToken) {
    getFilesOptions.pageToken = req.query.pageToken;
  }

  bucket.getFiles(getFilesOptions, function (err, files, nextQuery) {
    if (!err) {
      let formattedFiles = files.map((img) => {
        return {
          url: imgPath + img.name,
          id: img.id,
        };
      });
      res.json({ files: formattedFiles, nextQuery: nextQuery });
    }
  });
});

export default handler;
