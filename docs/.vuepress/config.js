module.exports = {
    base: '/devoxx-2018-vuepress/',
    title: 'Devoxx 2018',
    description: 'Un florilège des conférences vues au Devoxx cette année.',
    themeConfig: {
        nav: [
            { text: 'Keynote', link: '/keynote/' },
            { text: 'Conférence', link: '/conf/' },
            { text: 'Tools in Action', link: '/tools-in-action/' }
        ],
        sidebar: {
            '/keynote/': [
                {
                    title: 'Keynote',
                    collapsable: false,
                    children: []
                }
            ],
            '/conf/': [
                {
                    title: 'Conférence',
                    collapsable: false,
                    children: []
                }
            ],
            '/tools-in-action/': [
                {
                    title: 'Tools in Action',
                    collapsable: false,
                    children: [
                        'chaos-engineering',
                        'bot'
                    ]
                }
            ],
            '/': [
                ''
            ]
        }    
    }
};