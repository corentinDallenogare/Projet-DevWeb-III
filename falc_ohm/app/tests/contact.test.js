import React from "react";
import ReactDOM from "react-dom";
import FormsPage from "../public/js/contact";

test("render de la class PageMateriels", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormsPage/>, div);
});