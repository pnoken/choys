import { auth } from "../firebase-config";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

const withAuth = (Component) => {
  const Auth = (props) => {
    const [user, setUser] = useState("");
    const router = useRouter();
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // If user is not logged in, return login component
    useEffect(() => {
      if (!user) {
        router.push("/auth/login");
      }
    }, []);

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
