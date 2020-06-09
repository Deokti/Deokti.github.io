module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    ie: "11",
                    chrome: "60",
                    safari: "11.1",
                },
                useBuiltIns: "entry"
            }
        ]
    ]
};
