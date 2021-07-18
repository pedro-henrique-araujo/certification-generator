function generateContent(pdfDefinition) {
    let content = [
        { 
            columns: [
            ]
        },
        
        {
            image: './images/icon.png',
            alignment: 'left',
            margin: [75, 75, 0, 0],     
        },

        { 
            text: 'CERTIFICADO',
            widht: '*',
            margin: [0, -40, 0, 0],
            style: [
                'header',
                'light-weight'
            ]
        },

        { 
            text: 'DE ' + pdfDefinition.certificationKind,
            style: [
                'under-header',
                'light-weight'
            ]
        },


        { 
            text: 'Certificamos que', 
            style: 'regular-size',
            margin: [0, 50, 0, 0],
        },
        { 
            text: pdfDefinition.student, style: [
                'big-size',
                'handwriting'
            ] 
        },
        { text: 'concluiu com sucesso o discipulado mistrado pela igreja', style: 'little-size' },
        { 
            text: pdfDefinition.churchName, 
            style: [
                'little-size',
                'bold-weight'
            ]
        },

        { text: 'no dia ' + pdfDefinition.conclusionDay, style: 'little-size'},
       
        { 
            svg: `
                <svg height="1" width="639">
                    <line x1="0" y1="0" x2="271" y2="0" style="stroke:rgb(0,0,0);stroke-width:1" />
                    <line x1="368" y1="0" x2="639" y2="0" style="stroke:rgb(0,0,0);stroke-width:1" />
                </svg>
            `,

            margin: [0, 70, 0, 0]
        },
        

        {
            columns: [
                {
                    text: 'PASTOR ' + pdfDefinition.pastor
                },

                {
                    text: '',
                    width: 97
                },
    
                {
                    text: 'DIRIGENTE ' + pdfDefinition.localPastor
                }
            ],

            style: 'medium-weight',
            margin: [90, 0]
        },

        { 
            svg: `
                <svg height="1" width="271">
                    <line x1="0" y1="0" x2="271" y2="0" style="stroke:rgb(0,0,0);stroke-width:1" />
                </svg>
            `,
            margin: [0, 40, 0, 0]
        },

        {
            text: 'MINISTRADOR ' + pdfDefinition.teacher,
            style: 'medium-weight',
        }
    ];

    pdfDefinition.docDefinition.content = content;
}


module.exports = generateContent;