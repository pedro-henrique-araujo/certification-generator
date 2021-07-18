function generateStyles(pdfDefinition) {
    let styles = {
        'header': {
            decoration: 'underline',
            fontSize: 48,

        },

        'under-header': {
            fontSize: 19
        },

        'light-weight': {
            font: 'LightQuicksand'
        },

        'medium-weight': {
            font: 'MediumQuicksand'
        },

        'bold-weight': {
            bold: true
        },

        'handwriting': {
            font: 'GreatVibes'
        },

        'little-size': {
            fontSize: 12
        },

        'regular-size': {
            fontSize: 18
        },

        'big-size': {
            fontSize: 36
        }
    };

    let defaultStyle = {
        font: 'Quicksand',
        alignment: 'center'
    };

    pdfDefinition.docDefinition.styles = styles;
    pdfDefinition.docDefinition.defaultStyle = defaultStyle;
}

module.exports = generateStyles;