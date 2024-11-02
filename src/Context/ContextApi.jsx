import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)

const ContextApi = ({children}) => {
  const auth = getAuth(app)
  const [user,setUser]= useState(null)

const authInfo = {user}


    return (
        <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
    );
};

export default ContextApi;