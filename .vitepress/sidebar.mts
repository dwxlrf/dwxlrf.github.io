export default {
    '/spring/':[
        {
            text: '微服务',
            items: [
                { text: '分布式消息框架-RabbitMQ', link: '/spring/分布式消息框架RabbitMQ-.md' },
                { text: '服务注册和发现-nacos', link: '/spring/服务注册和发现-nacos' },
                { text: '三方调用框架-OpenFeign', link: '/spring/OpenFeign.md' },
            ],
            collapsed: false //可以拉起文章列表操作
        }
    ],
    '/开发工具/':[{
        text: '开发工具',
            items: [
                { text: '列表', link: '/开发工具/列表.md' },
                { text: 'Git', link: '/开发工具/Git课程讲义.md' }
            ],
            collapsed: false
    }],
    '/虚拟机/':[{
        text: '虚拟机',
            items: [
                { text: 'docker', link: '/虚拟机/Docker.md' },
                // { text: 'Runtime API Examples', link: '/api-examples' }
            ],
            collapsed: false
    }]
}