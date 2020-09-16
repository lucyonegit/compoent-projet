module.exports = {
    title: 'Argrace前端公共组件库',
    description: 'Argrace public component lib',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: '搜索', link: 'https://baidu.com' },
        ],
        sidebar: [
            ['/', '快速上手'],
            {
                title: '组件',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/Button/', 'BooleanBtn'],
                    ['/Images/', 'Images'],
                ]
            },
            {
                title: '自定义指令',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    ['/useEcharts/', 'useEcharts指令'],
                ]
            },
            {
                title: 'JS知识库',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'vue知识库',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'CSS知识库',
                collapsable: false,
                children: [
                ]
            },
            {
                title: 'node知识库',
                collapsable: false,
                children: [
                ]
            }

        ]
        // logo: '/assets/img/logo.png',
    }

}