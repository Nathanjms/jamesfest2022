import DefaultLayout from "../components/layouts/DefaultLayout";

import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";

const PasscodeForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visiblePasswordField, setVisiblePasswordField] = useState(false);
  const passwordInput = useRef();
  let redirectUrl = router.asPath.slice(7); // Get redirectUrl from the value after the '#' in the url

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordInput.current.value;

    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessPassword: password }),
      });
      if (response.ok) {
        return router.push(`/${redirectUrl}` || "/");
      }
      setError("Invalid Passcode, please try again.");
    } catch (error) {
      setError("E01: Unexpected error has occurred.");
    }
    setLoading(false);
  };
  return (
    <div className="row">
      <div className="col-lg-7 col-md-8 col-12 m-auto">
        <div className="card logInCard">
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className="text-center mb-4">Enter passcode</h2>
            <form onSubmit={handleSubmit}>
              <div id="password">
                <label className="form-label">Passcode</label>
                <div className="input-group mb-3">
                  <input
                    type={visiblePasswordField ? "text" : "password"}
                    className="form-control"
                    required={true}
                    aria-label="Passcode"
                    ref={passwordInput}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() =>
                      setVisiblePasswordField(!visiblePasswordField)
                    }
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-100 btn btn-primary"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForgotPasscodeForm = () => {
  let appUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.jamesfest2022.co.uk"
      : "http://localhost:3000";
  return (
    <div className="row">
      <div className="col-lg-7 col-md-8 col-12 m-auto">
        <div className="card logInCard">
          <div className="card-body">
            <h2 className="text-center mb-4">Forgotten Passcode?</h2>
            <p className="text-center mb-2">
              Please enter you name and email below and we will be in touch with
              the passcode!
            </p>
            <form
              action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              method="POST"
              className="text-start"
            >
              <div className="mb-3">
                <input type="hidden" name="Type" value="Forgotten Passcode" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${appUrl}/thank-you`}
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="JamesFest2022: New Passcode Request"
                />
                <div className="mb-1">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    required={true}
                    aria-label="Name"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    required={true}
                    aria-label="Email Address"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="w-100 btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInPage = () => {
  const [forgotPasswordForm, setForgotPasswordForm] = useState(false);

  const ForgotPasscodeBtn = () => {
    return (
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setForgotPasswordForm(!forgotPasswordForm)}
      >
        {forgotPasswordForm
          ? `Remembered the passcode?`
          : `Forgotten the passcode?`}
      </button>
    );
  };

  return (
    <DefaultLayout homeLinkOnly={true} title="Login">
      <div className="section container">
        {forgotPasswordForm ? <ForgotPasscodeForm /> : <PasscodeForm />}
        <div className="row pt-2">
          <div className="col-lg-7 col-md-8 col-12 m-auto text-center">
            <p className="mb-1">
              To access this page, please enter the passcode.
            </p>
            <ForgotPasscodeBtn />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignInPage;
