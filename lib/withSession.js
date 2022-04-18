import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const NinetyDaysInSeconds = 60 * 60 * 24 * 91; // 90 days (+1) in seconds for the cookie expiry

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "jamesfestAccess",
  ttl: NinetyDaysInSeconds,
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

export const getUserFromServerSession = ({
  redirectToLogin,
  redirectUrl = "",
}) =>
  withSessionSsr(async ({ req }) => {
    try {
      const user = req?.session?.user;

      if (!user) throw new Error("Unauthorized");

      return {
        props: {
          user,
        },
      };
    } catch (err) {
      if (redirectToLogin) {
        return {
          redirect: {
            permanent: false,
            destination: "/login#" + redirectUrl,
          },
        };
      } else {
        return {
          props: {},
        };
      }
    }
  });
