import React, { createContext, useReducer } from "react";
import { LIGHT_MODE, DARK_MODE, THEME_MODE } from "@/constants/index";

export const ThemeContext = createContext<any>({} as any);

const initialState = {
  // isDarkMode: !!localStorage.getItem(THEME_MODE) ?? false,
  isDarkMode: false,
};

const themeReducer = (
  state: { isDarkMode: boolean },
  action: { type: string }
) => {
  switch (action.type) {
    case LIGHT_MODE:
      return { isDarkMode: false };
    case DARK_MODE:
      return { isDarkMode: true };
    default:
      return state;
  }
};

type ThemeProviderProps = {
  children: React.ReactElement;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
