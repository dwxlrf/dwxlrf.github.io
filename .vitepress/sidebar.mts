export default {
    '/Java SE/':{
        text: 'Java SE',
            items: [
                // { text: '列表', link: '/Java/列表.md' },
                { text: 'Java基础', link: '/Java SE/Java基础' },
                { text: 'Java集合框架', link: '/Java SE/Java集合框架.md' },
                { text: 'Java异常', link: '/Java SE/Java异常'},
                { text: 'Java并发编程', link: '/Java SE/Java并发编程'},
                { text: 'JavaJVM深入理解', link: '/Java SE/JavaJVM深入理解'},
            ],
    },
    '/Java EE/':[
        {
            text: '基础框架',
            items: [
                // { text: '列表', link: '/spring/微服务/列表.md' },
                { text: 'JavaSpring', link: '/Java EE/基础框架/JavaSpring' },
                { text: 'SpringMVC', link: '/Java EE/基础框架/SpringMVC' },
                { text: 'SpringBoot', link: '/Java EE/基础框架/SpringBoot' },
            ],
            collapsed: false //可以拉起文章列表操作
        },
        {
            text: '微服务',
            items: [
                // { text: '列表', link: '/spring/微服务/列表.md' },
                { text: 'SpringCloud', link: '/Java EE/微服务/SpringCloud' },
                { text: '服务注册和发现-Nacos', link: '/Java EE/微服务/服务注册和发现-nacos' },
                { text: '三方调用框架-OpenFeign', link: '/Java EE/微服务/三方调用框架-OpenFeign.md' },
                { text: '分布式消息框架-RabbitMQ', link: '/Java EE/微服务/分布式消息框架RabbitMQ-.md' },
                { text: '分布式流量控制框架-Sentinel', link: '/Java EE/微服务/分布式流量控制框架-Sentinel.md' },
            ],
            collapsed: false //可以拉起文章列表操作
        },
    ],
    '/服务器/':{
        text: '服务器',
            items: [
                // { text: '列表', link: '/服务器/列表.md' },
                { text: '容器化技术-Docker', link: '/服务器/容器化技术-Docker.md' },
                { text: '操作系统-Linux', link: '/服务器/操作系统-Linux' },
                { text: '轻量级服务器-Tomcat', link: '/服务器/轻量级服务器-Tomcat' },
                { text: '数据持久化技术-Mysql', link: '/服务器/数据持久化技术-Mysql.md' },
                { text: '数据缓存技术-Redis', link: '/服务器/数据缓存技术-Redis.md' },
                // { text: 'Runtime API Examples', link: '/api-examples' }
            ],
            // collapsed: false
    },
    '/开发工具/':{
        text: '开发工具',
            items: [
                // { text: '列表', link: '/开发工具/列表.md' },
                { text: '代码管理工具-Git', link: '/开发工具/代码管理工具-Git.md' }
            ],
            // collapsed: false
    },
    '/回顾/':{
        text: '回顾',
            items: [
                // { text: '列表', link: '/开发工具/列表.md' },
                { text: '数据库相关', link: '/回顾/数据库相关.md' }
            ],
            // collapsed: false
    },
    '/深入理解/':{
        text: '深入理解',
            items: [
                { text: 'JDK设计', link: '/深入理解/JDK设计.md' }
            ],
            // collapsed: false
    },
}