import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res, session) {
  req.session.destroy();
  res.send({ ok: true });
}
