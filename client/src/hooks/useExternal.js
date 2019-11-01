import { useState, useEffect } from "react";
import Boxx from "../components/Boxx"

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
	clg("useSave");
	clg(incoming);
	const [saved, setSaved] = useLocalStorage(incoming);
	
	useEffect(() => {
		// <Boxx 
		// 	doSave={}
		// 	id={itm.id}
		// 	name={itm.name}
		// />
	}, [saved])

	return [saved, setSaved]
};

function clg(...x) {
	for (let exes of x) console.log(exes);
}
