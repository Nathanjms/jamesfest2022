import DefaultLayout from "../components/layouts/DefaultLayout";

import React, { useRef } from "react";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = passwordInput.current.value;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessPassword: password }),
    });

    if (response.ok) {
      console.log("push");
      return router.push("/admin");
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
                  <h2 className="text-center mb-4">Enter passcode</h2>
                  <form onSubmit={handleSubmit}>
                    <div id="password">
                      <label className="form-label">Password</label>
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
