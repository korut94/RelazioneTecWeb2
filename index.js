/**
 * File di creazione del pdf a partire dai file .md nella sezione res
 */

const markdownpdf = require("markdown-pdf");
const fs = require("fs");

markdownpdf({
    runningsPath: "./res/headfoot.js",
    cssPath: "./res/style.css",
    paperBorder: "2.5cm"
})
