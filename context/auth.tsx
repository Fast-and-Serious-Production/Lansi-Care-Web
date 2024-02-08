"use client";

import { Authentcation } from "@/services/Firebase";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { InitialUserState, useUser } from "./user";

const AuthStateChangeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setUser }: any = useUser();

  const InitiateAuthStateChange = () => {
    Authentcation().onAuthStateChanged((user): void => {
      if (user) {
        console.log("User is authenticated");
        setUser({ email: user.email, uid: user.uid });
      } else {
        console.log("User is not authenticated");
        setUser(InitialUserState);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return <>{children}</>;
};

export default AuthStateChangeProvider;
