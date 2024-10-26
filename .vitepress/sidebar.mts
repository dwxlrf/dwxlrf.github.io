export default {
    '/spring/':[
        {
            text: '微服务',
            items: [
                { text: '列表', link: '/spring/微服务/列表.md' },
                { text: '分布式消息框架-RabbitMQ', link: '/spring/微服务/分布式消息框架RabbitMQ-.md' },
                { text: '服务注册和发现-Nacos', link: '/spring/微服务/服务注册和发现-nacos' },
                { text: '三方调用框架-OpenFeign', link: '/spring/微服务/OpenFeign.md' },
            ],
            collapsed: false //可以拉起文章列表操作
        }
    ],
    '/服务器/':[{
        text: '服务器',
            items: [
                { text: 'docker', link: '/服务器/Docker.md' },
                // { text: 'Runtime API Examples', link: '/api-examples' }
            ],
            collapsed: false
    }],
    '/开发工具/':[{
        text: '开发工具',
            items: [
                { text: '列表', link: '/开发工具/列表.md' },
                { text: 'Git', link: '/开发工具/Git课程讲义.md' }
            ],
            collapsed: false
    }],
}