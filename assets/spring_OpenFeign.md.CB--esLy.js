import{_ as i,c as a,a2 as n,o as l}from"./chunks/framework.DPuwY6B9.js";const p="/assets/image-20241018202417023.DniFbZBi.png",c=JSON.parse('{"title":"三方调用框架-OpenFeign","description":"","frontmatter":{},"headers":[],"relativePath":"spring/OpenFeign.md","filePath":"spring/OpenFeign.md"}'),h={name:"spring/OpenFeign.md"};function t(e,s,k,E,r,d){return l(),a("div",null,s[0]||(s[0]=[n('<h1 id="三方调用框架-openfeign" tabindex="-1">三方调用框架-OpenFeign <a class="header-anchor" href="#三方调用框架-openfeign" aria-label="Permalink to &quot;三方调用框架-OpenFeign&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><a href="https://yiyan.baidu.com/" target="_blank" rel="noreferrer">服务注册和发现-nacos</a></p><p>使用此调用三方服务前需使用<code>nacos</code>将服务注册到服务中心</p><h2 id="一、openfeign是什么" tabindex="-1">一、OpenFeign是什么？ <a class="header-anchor" href="#一、openfeign是什么" aria-label="Permalink to &quot;一、OpenFeign是什么？&quot;">​</a></h2><p>pring Cloud OpenFeign是一种基于Spring Cloud的声明式REST客户端，它简化了与HTTP服务交互的过程。往常Spring自带的<code>RestTeamplate太过繁琐</code>，OpenFeign可以通过<code>注解</code>的方式来声明请求参数、请求方式、请求头等信息。调用自身接口更为便捷<code>只要配置和注解</code>就可以，同时，它还提供了<code>负载均衡</code>和<code>服务发现</code>等功能，Spring Cloud OpenFeign能够提高应用程序的可靠性、可扩展性和可维护性，是构建微服务架构的重要工具之一。</p><h2 id="二、openfeign调用如何拦截请求" tabindex="-1">二、OpenFeign调用如何拦截请求 <a class="header-anchor" href="#二、openfeign调用如何拦截请求" aria-label="Permalink to &quot;二、OpenFeign调用如何拦截请求&quot;">​</a></h2><p>在OpenFeign中有<code>RequestInterceptor</code>这样一个接口，其内部只有一个<code>apply</code>方法，该方法能够拦截每一个OpenFeign的请求</p><p><code>RequestInterceptor接口</code></p><p><img src="'+p+`" alt="image-20241018202417023"></p><p>当我们想拦截OpenFeign请求做验证和操作时，可以写一个配置类，注入容器即可。在其内部的apply方法重写即可写入自己想要做的操作</p><p><code>OpenFeign拦截</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FeignConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RequestInterceptor </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requestInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //OpenFeign调用有没有校验Token？？？ No</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RequestInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RequestTemplate </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //验证当前用户，将userId放入user-info请求头中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                Long userId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> UserContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getUser</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (userId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    template.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user-info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, userId.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h2 id="三、openfeign快速开始" tabindex="-1">三、OpenFeign快速开始 <a class="header-anchor" href="#三、openfeign快速开始" aria-label="Permalink to &quot;三、OpenFeign快速开始&quot;">​</a></h2><h3 id="_1-导入依赖" tabindex="-1">1.导入依赖 <a class="header-anchor" href="#_1-导入依赖" aria-label="Permalink to &quot;1.导入依赖&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--openFeign--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.springframework.cloud&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-cloud-starter-openfeign&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--负载均衡器--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.springframework.cloud&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-cloud-starter-loadbalancer&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_2-启动openfeign" tabindex="-1">2.启动OpenFeign <a class="header-anchor" href="#_2-启动openfeign" aria-label="Permalink to &quot;2.启动OpenFeign&quot;">​</a></h3><p>在启动类上添加注解<code>@EnableFeignClients</code>。当调用自身服务不在同一模块中时，需要在注解添加扫描参数，参数结果为被调用Client接口包路径</p><p><code>启动类</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//com.api.client为写的client接口包路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EnableFeignClients</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">basePackages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;com.api.client&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MapperScan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.trade.mapper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TradeApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SpringApplication.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TradeApplication.class, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-编写具体调用接口" tabindex="-1">3.编写具体调用接口 <a class="header-anchor" href="#_3-编写具体调用接口" aria-label="Permalink to &quot;3.编写具体调用接口&quot;">​</a></h3><p>当前面两步弄好之后，就可以创建具体的调用接口了，前提需要保持<code>请求路径，方法类型，方法参数一致！！！</code></p><p><code>client接口</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//trade-service为注册到nacos的服务名称，必须保持一致</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//configuration = FeignConfig.classs使用FeignConfig类的配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FeignClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;trade-service&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">configuration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FeignConfig.class)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TradeClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //put请求方法	/orders/{orderId}请求路径	@PathVariable(&quot;orderId&quot;)参数一致</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PutMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/orders/{orderId}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> markOrderPaySuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PathVariable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;orderId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) Long </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">orderId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="四、解决三方调用发生的跨域" tabindex="-1">四、解决三方调用发生的跨域 <a class="header-anchor" href="#四、解决三方调用发生的跨域" aria-label="Permalink to &quot;四、解决三方调用发生的跨域&quot;">​</a></h2><h3 id="_1-域" tabindex="-1">1.域 <a class="header-anchor" href="#_1-域" aria-label="Permalink to &quot;1.域&quot;">​</a></h3><p>域由三部分组成：协议、IP、端口</p><p>三部分都相同，则为同域。</p><p>同域示例：</p><ul><li><code>http://localhost:8081/items</code> <code>http://localhost:8081/carts</code></li><li><code>http://10.31.10.11/items</code> <code>http://10.31.10.11:80/carts</code></li></ul><p>至少有一个不同，就形成了跨域。</p><ul><li>在发起Ajax请求时，出现跨域会违反浏览器的同源策略，造成正常功能受影响 <ul><li>出现了Ajax请求跨域问题是，是请求能够到达目标接口，但是响应无法返回</li></ul></li><li>同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。</li></ul><p>跨域示例：</p><ul><li><code>http://localhost/items</code> <code>https://localhost/carts </code> 协议不同</li><li><code>http://10.31.10.11/items</code> <code>http://10.31.10.12/carts </code> IP不同</li><li><code>http://localhost:8081/items</code> <code>http://localhost:8082/carts </code> 端口不同</li></ul><h3 id="_2-springmvc解决跨域问题" tabindex="-1">2.SpringMVC解决跨域问题 <a class="header-anchor" href="#_2-springmvc解决跨域问题" aria-label="Permalink to &quot;2.SpringMVC解决跨域问题&quot;">​</a></h3><p>在控制器上增加注解 <code>@CrossOrigin</code></p><h3 id="_3-gateway网关解决跨域问题" tabindex="-1">3.gateway网关解决跨域问题 <a class="header-anchor" href="#_3-gateway网关解决跨域问题" aria-label="Permalink to &quot;3.gateway网关解决跨域问题&quot;">​</a></h3><p><code>导入依赖</code></p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		&lt;!--网关--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;org.springframework.cloud&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;spring-cloud-starter-gateway&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>配置有两种方法</p></blockquote><p><code>application.yml 增加配置1</code></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cloud</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    gateway</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 。。。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      globalcors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局的跨域处理</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        add-to-simple-url-handler-mapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 解决options请求被拦截问题</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        corsConfigurations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &#39;[/**]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            allowedOriginPatterns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许哪些网站的跨域请求，写通配符</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #allowedOrigins:  # 允许哪些网站的跨域请求，写精确域名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #  - &quot;http://localhost:8888&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            allowedMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许的跨域ajax的请求方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DELETE&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PUT&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OPTIONS&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            allowedHeaders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 允许在请求中携带的头信息</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            allowCredentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 是否允许携带cookie</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            maxAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">360000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 这次跨域检测的有效期</span></span></code></pre></div><p><code>application.yml 增加配置2</code></p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cloud</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    gateway</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 。。。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      routes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#路由表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">item-service</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #路由的唯一标识</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb://item-service</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 路由的目标服务，lb代表负载均衡，会从注册中心拉取服务列表</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          predicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#断言规则，满足下面规则则会路由到对应的微服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Path=/items/**,/search/**</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 这里是以请求路径作为判断规则</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          filters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AddRequestHeader=k1, v1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #增加请求头，针对当前路由生效</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cart-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb://cart-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          predicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Path=/carts/**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">user-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb://user-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          predicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Path=/users/**,/addresses/**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">trade-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb://trade-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          predicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Path=/orders/**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pay-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lb://pay-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          predicates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Path=/pay-orders/**</span></span></code></pre></div><h3 id="_4-nginx配置解决跨域问题" tabindex="-1">4.Nginx配置解决跨域问题 <a class="header-anchor" href="#_4-nginx配置解决跨域问题" aria-label="Permalink to &quot;4.Nginx配置解决跨域问题&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourdomain.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 允许所有源跨域访问</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Access-Control-Allow-Origin&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Access-Control-Allow-Methods&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;GET, POST, PUT, DELETE, OPTIONS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Access-Control-Allow-Headers&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Content-Type, Authorization, X-Requested-With&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Access-Control-Allow-Credentials&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;true&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 如果使用Nginx作为反向代理，请添加相应的proxy_pass配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # proxy_pass http://backend-server:port/api/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 其他配置...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,46)]))}const y=i(h,[["render",t]]);export{c as __pageData,y as default};