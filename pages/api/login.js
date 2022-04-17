import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  if (req.method !== "POST") {
    // Process a POST request
    res.status(404).json({ message: "Not Found" });
    return;
  }

  if (req.body.accessPassword !== process.env.ACCESS_KEY) {
    res.status(401).send({
      message: "Unauthorized!",
    });
    return;
  }

  req.session.user = {
    authenticated: true,
  };

  await req.session.save();
  res.send("Authenticated");
}
