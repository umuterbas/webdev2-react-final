import React from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "./AuthContext";

const Signin = () => {
   const {googleSignIn} = UserAuth();
   const handleGoogleSignIn = async () => {
      
      try {
         await googleSignIn();
      } catch (error) {
         console.log(error);
      }
   }
   return (
      <div>
         {console.log("key", process.env.REACT_APP_APIKEY)}
         <h1 className="text-center text-3x1 font-bold py-8">Sign in</h1>
         <div className="max-w-[240px] m-auto py-4">
            <GoogleButton onClick={handleGoogleSignIn} />
            <button onClick={handleGoogleSignIn}>Login</button>
         </div>
      </div>
   )
}

export default Signin;