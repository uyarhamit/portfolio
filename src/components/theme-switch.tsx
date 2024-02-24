"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type themeType = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<themeType>("light");
  const [themeCheck, setThemeCheck] = useState<boolean>(false);

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    let themeStorage = window.localStorage.getItem("theme") as themeType | null;
    if (themeStorage){
        setTheme(themeStorage);
        if(themeStorage === 'dark') document.documentElement.classList.add("dark");
    }else if(window.matchMedia("(prefers-color-scheme: dark").matches){
        setTheme("dark");
    }
    setThemeCheck(true);
  }, []);

  return (
    <>
      {themeCheck &&
        (theme == "light" ? (
          <button
            className="fixed bottom-5 right-5 bg-gray-950 h-10 w-10 rounded-full text-yellow-400 flex items-center justify-center bg-opacity-80 backdrop-blur-md border border-gray-950 border-opacity-40 shadow-2xl hover:scale-105 active:scale-110 transition-all"
            onClick={toogleTheme}
          >
            <BsMoon />
          </button>
        ) : (
          <button
            className="fixed bottom-5 right-5 bg-gray-50 h-10 w-10 rounded-full text-gray-950 flex items-center justify-center border border-white border-opacity-40 hover:scale-105 active:scale-110 transition-all"
            onClick={toogleTheme}
          >
            <BsSun />
          </button>
        ))}
    </>
  );
}
