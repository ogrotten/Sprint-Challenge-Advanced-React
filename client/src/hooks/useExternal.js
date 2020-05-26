import { useState, useEffect } from "react";
// import Boxx from "../components/Boxx"

export const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const send = window.localStorage.getItem(key)
		return send ? JSON.parse(send) : initialValue;
	});

	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};

export const useDark = (incoming) => {
	const [darkMode, setDarkMode] = useLocalStorage(incoming);
	const body = document.querySelector("body");

	useEffect(() => {
		darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
	}, [darkMode]);

	return [darkMode, setDarkMode]
};

function clg(...x) {
	for (let exes of x) console.log(exes);
}
