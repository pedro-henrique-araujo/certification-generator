function configureFonts(pdfDefinition) {
    pdfDefinition.fonts = {
        Times: {
            normal: 'Times-Roman',
            bold: 'Times-Bold',
            italics: 'Times-Italic',
            bolditalics: 'Times-BoldItalic'
        },

        Quicksand: {
            normal: './fonts/Quicksand/static/Quicksand-Regular.ttf',
            bold: './fonts/Quicksand/static/Quicksand-Bold.ttf'
        },

        LightQuicksand: {
            normal: './fonts/Quicksand/static/Quicksand-Light.ttf'
        },

        MediumQuicksand: {
            normal: './fonts/Quicksand/static/Quicksand-Medium.ttf'
        },

        GreatVibes: {
            normal: './fonts/Great-Vibes/GreatVibes-Regular.ttf'
        }
    };
}

module.exports = configureFonts;