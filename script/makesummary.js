/**
 * Script to make the summary with the list of chapter in this book.
 * The script read the content of any markdown files into `res/chapter` 
 * directory and get the header name to create the index.
 */

const fs = require("fs");
// The header of the summary file
var content = "# Summary\n\n";

/**
 * Leggi il contenuto della cartella res/sections, ed estrai il contenuto da
 * ogni path letta nella directory. Il risultato e' un array ordinato, in 
 * quanto, i nomi dei file seguono la regola:
 * section_x.md 
 * dove x è un numero. In questo modo i capitoli sono automaticamente ordinati.
 */
fs.readdirSync("./res/chapter/").forEach((file) => {
    var path = `res/chapter/${file}`;
    var buffer = fs.readFileSync(path, "utf-8");
    // Cattura tutti gli header presenti nella sezione
    var match = buffer.match(/^\# .*$/mg);

    if (match == undefined) {
	throw new Error(`No header include in the file ${path}`);
    } else {
	content += match.map((header) => {
	    // Remove che '#' from the header
	    var title = header.substring(2);
	    return `* [${title}](${path})`;
	}).join("\n"); // So the list is a waterfall

	content += "\n";
    }
});

// Save the summary in the root of project
fs.writeFileSync("SUMMARY.md", content, "utf-8");

