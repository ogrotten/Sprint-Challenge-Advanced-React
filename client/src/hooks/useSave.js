import { useState } from "react";
import {useLocalStorage} from "./useExternal";

export const useSave = (data) => {
	const [darkMode, setDarkMode] = useLocalStorage(incoming);
	const body = document.querySelector("body");

	useEffect(() => {
		darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
	}, [darkMode]);

	return [darkMode, setDarkMode]

};