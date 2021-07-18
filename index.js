let initPdfDefinition = require('./initPdfDefinition');
let configureFonts = require('./configureFonts');
let generatePageOptionsAndBackground = require('./generateDocumentDefinition');
let generateStyles = require('./generateStyles');
let generateContent = require('./generateContent');
let generatePdfFile = require('./generatePdfFile');
let certificationData = require('./certification-data.json');


let pdfDefinition = initPdfDefinition();

configureFonts(pdfDefinition);

generatePageOptionsAndBackground(pdfDefinition);

generateStyles(pdfDefinition);

pdfDefinition.pastor = certificationData.pastor;
pdfDefinition.localPastor = certificationData.localPastor;
pdfDefinition.teacher = certificationData.teacher;
pdfDefinition.churchName = certificationData.churchName;
pdfDefinition.certificationKind = certificationData.certificationKind;
pdfDefinition.conclusionDay = certificationData.conclusionDay;
pdfDefinition.outputDirectory = certificationData.outputDirectory;


for (let student of certificationData.students) {
    

    pdfDefinition.student = student;

    generateContent(pdfDefinition);
    
    generatePdfFile(pdfDefinition);
}


  