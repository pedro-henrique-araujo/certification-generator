let fs = require('fs');
let PdfPrinter = require('pdfmake');


function createDocumentName(studentName) {
    let studentNameInLowerCase = studentName.toLowerCase();
    let spacesRegex = /\ /g;
    let studentNameWithoutSpaces = studentNameInLowerCase.replace(spacesRegex, '-');
    return studentNameWithoutSpaces;
}

function generatePdfFile(pdfDefinition) {
    let { docDefinition, fonts, options } = pdfDefinition;
    let printer = new PdfPrinter(fonts);
    let pdfDoc = printer.createPdfKitDocument(docDefinition, options);
    let fileName = createDocumentName(pdfDefinition.student);
    let path = pdfDefinition.outputDirectory + '/'+ fileName + '.pdf';
    let writeStream = fs.createWriteStream(path);
    pdfDoc.pipe(writeStream);
    pdfDoc.end();  
}

module.exports = generatePdfFile;