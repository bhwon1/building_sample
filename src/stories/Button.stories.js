import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
    title: "Element/Button",
    tags: ["autodocs"],
    render: ({ label, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return createButton({ label, ...args });
    },
    argTypes: {
        backgroundColor: { control: "color" },
        label: { control: "text" },
        onClick: { action: "onClick" },
        primary: { control: "boolean" },
        size: {
            control: { type: "select" },
            options: ["xs", "s", "m", "l", "xl"],
        },
        color: {
            control: { type: "select" },
            options: ["w", "r", "p", "bler", "bl", "b", "bd", "bder", "gler", "gl", "gd", "gder"],
        },
        icon: {
            control: { type: "select" },
            options: ["sch", "prv", "nxt"],
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
    render: (args) =>
        createButton({
            primary: true,
            label: "Primary color",
        }),
};

export const Secondary = {
    args: {
        label: "Secondary color",
        color: "r",
    },
};

export const x_large = {
    args: {
        size: "xl",
        label: "button",
    },
};

export const large = {
    args: {
        size: "l",
        label: "button",
    },
};

export const medium = {
    args: {
        size: "m",
        label: "button",
    },
};

export const small = {
    args: {
        size: "s",
        label: "button",
    },
};

export const x_small = {
    args: {
        size: "xs",
        label: "button",
    },
};
