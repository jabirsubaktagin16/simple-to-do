import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./../../firebase.init";
import Loading from "./../Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  const location = useLocation();

  const errorMessage = () =>
    toast(error?.message || verificationError?.message);

  if (error || verificationError) errorMessage();

  if (loading || sending) return <Loading />;

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Email Verification</h2>
            <p>
              Oops!! Looks like your email is not verified yet. Click Verify
              Email button to send verification email
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={async () => {
                  await sendEmailVerification();
                  toast("Verificaion Email Sent");
                }}
                className="btn btn-primary"
              >
                Verify Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
