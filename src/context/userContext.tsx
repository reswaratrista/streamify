import { ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getWithAuth } from "../api/Api";
import { toastError } from "../components/toast";
import React from "react";

export type UserTypeContext = {
  user: User | null;
};

const defaultValue = {
  user: {
    name: "",
    email: "",
    username: "",
    password: "",
    internal_token: null,
    fetch_token: null,
  },
};

export const UserContext = createContext<UserTypeContext>(defaultValue);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
  };

// get token
  const token = Cookies.get("token");
  const getUser = async () => {
    if (token) {
      try {
        const response = await getWithAuth(token, "users/me");
        const data = response.data?.data;
        updateUser(data);
      } catch (error) {
        toastError("Get User Failed");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;