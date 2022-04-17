import DefaultLayout from "../components/layouts/DefaultLayout";

import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const passwordInput = useRef();
  let redirectUrl = router.asPath.slice(7); // Get redirectUrl from the value after the '#' in the url

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordInput.current.value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessPassword: password }),
      });
      if (response.ok) {
        return router.push(redirectUrl || "/");
      }
      setError("Invalid Passcode, please try again.");
    } catch (error) {
      setError("E01: Unexpected error has occurred.");
    }
  };

  return (
    <DefaultLayout>
      <div className="section">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-12">
              <div className="card logInCard">
                <div className="card-body">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <h2 className="text-center mb-4">Enter passcode</h2>
                  <form onSubmit={handleSubmit}>
                    <div id="password">
                      <label className="form-label">Passcode</label>
                      <input
                        type="password"
                        className="mb-3 form-control"
                        required={true}
                        ref={passwordInput}
                      />
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
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignInPage;
