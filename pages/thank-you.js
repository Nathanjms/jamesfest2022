import DefaultLayout from "../components/layouts/DefaultLayout";
import Link from "next/link";

const thankYou = () => {
  return (
    <DefaultLayout homeLinkOnly={true} title="Login">
      <div className="section container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="card logInCard">
              <div className="card-body">
                <h2 className="text-center mb-4">Submission Received</h2>
                <p className="text-center mb-2">
                  We will be in touch soon with the passcode!
                </p>
              </div>
              <Link passHref={true} href="/">
                <a
                  className="btn btn-primary btn-sm mx-auto mb-4"
                  style={{ maxWidth: "500px", width: "85%" }}
                >
                  Return to Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default thankYou;
