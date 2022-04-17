import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "jamesfestAccess",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}

export const getUserFromServerSession = ({ redirectToLogin }) =>
  withSessionSsr(async ({ req }) => {
      console.dir(req.session.user);
      try {
      const user = req?.session?.user;
      console.log(user);

      if (!user) throw new Error("Unauthorized");

      return {
        props: {
          user,
        },
      };
    } catch (err) {
        console.log(err);
      if (redirectToLogin) {
        return {
          redirect: {
            permanent: false,
            destination: "/login",
          },
        };
      } else {
        return {
          props: {},
        };
      }
    }
  });
