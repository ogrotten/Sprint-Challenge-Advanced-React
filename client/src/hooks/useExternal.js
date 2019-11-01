import { useState, useEffect } from "react";

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

export const useSave = (incoming) => {
	const [saved, setSaved] = useLocalStorage(incoming);

	// useEffect(() => {
		
	// }, [saved])

	return [saved, setSaved]
};