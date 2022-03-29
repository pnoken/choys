import { auth } from "../firebase-config";
import { useState } from "react";
import Login from "../components/Layout/Auth";
import { onAuthStateChanged } from "firebase/auth";

const withAuth = (Component) => {
  const Auth = (props) => {
    const [user, setUser] = useState("");

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // If user is not logged in, return login component
    if (!user) {
      return <Auth />;
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

export default withAuth;
