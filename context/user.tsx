"use client";

import { createContext, useContext, useState } from "react";

export const InitialUserState = {
  email: null,
  uid: null,
};

const userContext = createContext(InitialUserState);

export const useUser = () => {
  return useContext(userContext);
};

export const UserProvider = (props: any) => {
  const [userState, setUserState] = useState(InitialUserState);

  console.log({ userState });

  const SetUser = (userCredential: any): void => {
    setUserState({ ...userCredential });
  };

  const ResetUser = () => {
    setUserState(InitialUserState);
  };

  const value = { ...userState, SetUser, ResetUser };
  return <userContext.Provider value={value} {...props} />;
};
