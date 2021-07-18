function generatePageOptionsAndBackground(pdfDefinition) {

    function generateBackground() {
        return [
            {            
                image: './images/background-image.png',
                fit: Array(2).fill(842)
            }
        ];
    } 
    
    pdfDefinition.options = {};

    pdfDefinition.docDefinition.pageOrientation = 'landscape';
    pdfDefinition.docDefinition.pageMargins = Array(4).fill(0);
    pdfDefinition.docDefinition.background = generateBackground;
    
    
}

module.exports = generatePageOptionsAndBackground;