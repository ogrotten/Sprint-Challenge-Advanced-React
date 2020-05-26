import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

test("renders without crashing", () => {
	const wrapper = rtl.render(<App />);

	const hasLightsButt = wrapper.queryByText(/lights/i);
	expect(hasLightsButt).toBeInTheDocument;

	const hasLoading = wrapper.queryByText(/loading/i)
	expect(hasLoading).toBeInTheDocument;
});


// test("renders without crashing", () => {
// 	const wrapper = rtl.render(<App />);
// 	const player = 7;
// 	const position = wrapper.getByTestId(`id7`)
// 	expect(position.textContent).toBe("Julie Ertz")
// });