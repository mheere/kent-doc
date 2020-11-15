import * as ddd from "markdown-pdf";
import fs from "fs";

debugger;
 
fs.createReadStream("/path/to/document.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("/path/to/document.pdf"))
 
// --- OR ---
 
markdownpdf().from("/path/to/document.md").to("/path/to/document.pdf", function () {
  console.log("Done")
})

// testing 20201115 of a pull request