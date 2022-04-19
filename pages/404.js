import DefaultLayout from "../components/layouts/DefaultLayout";
import Link from "next/link";

const SignInPage = () => {
  return (
    <DefaultLayout title="404">
      <div className="section container">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12 m-auto">
            <div className="card logInCard">
              <div className="card-body">
                <h2 className="text-center mb-4">404 Not Found</h2>
                <p>
                  This page could not be found. Please use a link in the nav
                  bar, or click below to return to the homepage.
                </p>
                <Link href="/" passHref={true}>
                  <a type="submit" className="w-100 btn btn-primary">
                    Return to Homepage
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-lg-7 col-md-8 col-12 m-auto text-center"></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignInPage;
