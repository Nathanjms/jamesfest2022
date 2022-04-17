// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.body.accessPassword === process.env.ACCESS_KEY) {
    res.status(200).json({ name: "Valid" });
    return;
  }
  res.status(401).send({
    message: "Unauthorized!",
  });
  return;
}
