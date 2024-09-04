"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { getTokenFromSessionStorage } from "@/helpers/localstorage.helper";
import { store } from "../../store/store";
import { useAppDispatch } from "@/store/hooks/hooks";
import { login, logout } from "@/store/user/user.slice";
import { AuthService } from "@/service/auth.service";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const checkAuth = async () => {
    const token = await getTokenFromSessionStorage();
    try {
      if (token) {
        const data = await AuthService.getProfile();
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
