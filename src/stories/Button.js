import "./button.css";
import "./color_root.css";

export const createButton = ({ primary = false, size = "m", color = "p", icon = "", backgroundColor, label, onClick }) => {
    const btn = document.createElement("btn");
    btn.type = "button";
    btn.innerText = label;
    btn.addEventListener("click", onClick);

    const mode = primary ? "" : "";
    btn.className = [`btn-${color}`, `btn-${size}`, mode].join(" ");

    btn.style.backgroundColor = backgroundColor;

    return btn;
};
