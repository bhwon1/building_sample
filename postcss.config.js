module.exports = {
    plugins: [
        require("postcss-import"), // postcss-import 추가
        require("postcss-preset-env")({
            browsers: "> 5% in KR, defaults, not IE < 11",
            autoprefixer: { grid: "autoplace" },
        }),
    ],
};
