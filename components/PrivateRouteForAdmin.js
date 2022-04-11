import { auth } from "../firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import Preloader from "./preloader";

const withAdminAuth = (Component) => {
  const Auth = (props) => {
    const [user, setUser] = useState("");
    const router = useRouter();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if (typeof window !== "undefined" && user === null)
      router.push("/auth/login");

    if (!user) {
      return <Preloader />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAdminAuth;
