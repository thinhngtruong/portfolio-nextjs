import React, { createContext, useEffect, useReducer } from "react";
import {
  LIGHT_MODE,
  DARK_MODE,
  INIT_THEME_MODE,
  PERSIST_STATE,
  DARK_MODE_CLASS,
} from "@/constants/index";
import commonStyles from "@/styles/common.module.scss";
import homeStyles from "@/styles/home.module.scss";
import blogStyles from "@/styles/blog.module.scss";

export const AppContext = createContext<any>({} as any);

const initialState = {
  isDarkMode: false,
};

const appReducer = (
  state: { isDarkMode: boolean },
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case INIT_THEME_MODE:
      return { isDarkMode: action.payload };
    case LIGHT_MODE:
      return { isDarkMode: false };
    case DARK_MODE:
      return { isDarkMode: true };
    default:
      return state;
  }
};

type AppProviderProps = {
  children: React.ReactElement;
};

export const AppProvider = (props: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    let themeMode = null;
    try {
      themeMode = JSON.parse(localStorage.getItem(PERSIST_STATE) ?? "");
    } catch (err) {
      console.log(err);
    }
    if (themeMode) {
      dispatch({
        type: INIT_THEME_MODE,
        payload: themeMode.isDarkMode,
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(PERSIST_STATE, JSON.stringify(state));
    }
    if (state.isDarkMode) {
      document.body.classList.add(
        DARK_MODE_CLASS,
        commonStyles[DARK_MODE_CLASS],
        homeStyles[DARK_MODE_CLASS],
        blogStyles[DARK_MODE_CLASS]
      );
    } else {
      document.body.removeAttribute("class");
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
