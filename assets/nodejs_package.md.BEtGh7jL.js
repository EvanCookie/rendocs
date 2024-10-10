import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CzUHEUKO.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"nodejs/package.md","filePath":"nodejs/package.md","lastUpdated":1723449759000}'),n={name:"nodejs/package.md"},e=t(`<h2 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h2><h3 id="_1-包、包管理工具" tabindex="-1">1. 包、包管理工具 <a class="header-anchor" href="#_1-包、包管理工具" aria-label="Permalink to &quot;1. 包、包管理工具&quot;">​</a></h3><ul><li>包是一组特定功能的代码集合，英文为：<code>package</code>。</li><li>包管理器可以对包进行：下载、安装、更新、删除 等操作。</li></ul><h3 id="_2-常用的包管理工具" tabindex="-1">2. 常用的包管理工具 <a class="header-anchor" href="#_2-常用的包管理工具" aria-label="Permalink to &quot;2. 常用的包管理工具&quot;">​</a></h3><ul><li><strong>npm：</strong> 出现最早且使用最广泛的 JavaScript 包管理器，随 Node.js 一起安装。</li><li><strong>cnpm：</strong> cnpm 是 npm 的一个镜像版本，针对国内网络环境进行了优化。</li><li><strong>yarn：</strong> 由 Facebook 开发，旨在提高包的安装速度和解决一些 npm 的问题。</li><li><strong>pnpm：</strong> 可以共享依赖库，从而节省磁盘空间，同时也能提升安装速度。</li></ul><h3 id="_3-npm" tabindex="-1">3. npm <a class="header-anchor" href="#_3-npm" aria-label="Permalink to &quot;3. npm&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121134992.png" alt="image-20240812113424963" loading="lazy"></p><p>NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。</p><p>可以通过 <code>npm -v</code> 查看版本号测试，如果显示 npm 版本号说明安装成功。</p><h4 id="_3-1-初始化包" tabindex="-1">3.1 初始化包 <a class="header-anchor" href="#_3-1-初始化包" aria-label="Permalink to &quot;3.1 初始化包&quot;">​</a></h4><p>创建一个空目录，然后在此目录下，执行 <code>npm init</code>，该命令的作用是：将文件夹<strong>初始化为一个包</strong>。</p><p>根据提示，进行包的核心配置：</p><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121139564.png" alt="image-20240812113953522" loading="lazy"></p><p>初始化成功后，会出现一个<code>package.json</code>，这是包的配置文件，每个包都必须要有<code>package.json</code>，它是包的说明文件，<code>package.json</code> 内容示例：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,       </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#包的名字</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,   </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#包的版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#包的描述</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;server.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,   </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#包的入口文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {			</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#脚本配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;echo </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Error: no test specified</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &amp;&amp; exit 1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,			</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#作者</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ISC&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	#开源证书</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意事项</p><ol><li>name (<code>包名</code>) 不能有中文、不能大写，默认值是文件夹名称。</li><li>version (<code>版本号</code>)要求 <code>x.x.x</code>的形式定义，<code>x</code>必须是数字，默认值是 <code>1.0.0</code>。</li><li><code>package.json</code>也可以手动创建与修改</li><li>使用 <code>npm init -y</code>或者<code>npm init --yes</code>极速创建<code>package.json</code>。</li><li>点击了解<a href="http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html" target="_blank" rel="noreferrer">开源证书相关1</a>、<a href="https://paulmillr.com/posts/simple-description-of-popular-software-licenses/" target="_blank" rel="noreferrer">开源证书相关2</a></li></ol></div><h4 id="_3-2-搜索包" tabindex="-1">3.2 搜索包 <a class="header-anchor" href="#_3-2-搜索包" aria-label="Permalink to &quot;3.2 搜索包&quot;">​</a></h4><ol><li>命令行搜索：<code>npm search &lt;package name&gt;</code>或<code>npm s &lt;package name&gt;</code></li><li>网站搜索： <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a></li></ol><h4 id="_3-3-安装包" tabindex="-1">3.3 安装包 <a class="header-anchor" href="#_3-3-安装包" aria-label="Permalink to &quot;3.3 安装包&quot;">​</a></h4><p>以安装axios为例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认安装最新的包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  axios</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   或</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看一个包的所有版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> versions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装指定版本的包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@version</span></span></code></pre></div><p>运行之后文件夹下会增加两个资源</p><ul><li><code>node_modules</code>：该文件夹中存放下载好的包。</li><li><code>package-lock.json</code>：包的锁文件，用来锁定包的版本。</li></ul><div class="tip custom-block"><p class="custom-block-title">关于<code>package-lock.json</code> 中的版本限制的说明：</p><ul><li><code>^</code>：锁定主版本号，接受所有以<code>1</code>开头的版本，如：<code>1.0.2</code>等，但不包括<code>2.0.0</code>。</li><li><code>~</code>：允许安装小版本的更新，但不包括次要版本的更改。<code>~1.0.1</code> 允许 <code>1.0.x</code>。</li><li><code>&gt;</code>：允许比指定版本更高的版本，但不包括指定版本本身。<code>&gt;1.0.1</code> 允许 <code>1.1.0</code>, <code>2.0.0</code>等。</li><li><code>&lt;</code>：允许比指定版本更低的版本。<code>&lt;1.0.1</code> 允许 <code>1.0.0</code> 及更早的版本。</li><li><code>&gt;=</code>：允许指定版本及更高的版本。<code>&gt;=1.0.1</code> 允许 <code>1.0.1</code> 及其之后的版本。</li><li><code>&lt;=</code>：允许指定版本及更低的版本。<code>&lt;=1.0.1</code> 允许 <code>1.0.1</code> 及其之前的版本。</li><li><code>*</code>：允许任何版本，这种情况下最不限制，但也<strong>最不稳定</strong>。</li><li>如果没有任何符号，只写版本号，如 <code>1.0.1</code>，这意味着严格要求安装这个特定版本。</li></ul></div><h4 id="_3-4-使用包" tabindex="-1">3.4 使用包 <a class="header-anchor" href="#_3-4-使用包" aria-label="Permalink to &quot;3.4 使用包&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> uniq</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;uniq&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// CommonJS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uniq </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uniq&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // ES Module</span></span></code></pre></div><p><code>npm</code>的引入流程是：</p><ol><li>在当前文件夹下<code>node_modules</code>中寻找同名的文件夹，若有则使用，若没有进入下一步。</li><li>在上级目录中下的<code>node_modules</code>中寻找同名的文件夹，直至找到磁盘根目录。</li></ol><h4 id="_3-5-生产依赖与开发依赖" tabindex="-1">3.5 生产依赖与开发依赖 <a class="header-anchor" href="#_3-5-生产依赖与开发依赖" aria-label="Permalink to &quot;3.5 生产依赖与开发依赖&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">生产环境与开发环境</p><ul><li><p>开发环境: 是程序员专门用来写代码的环境，一般是程序员的电脑。</p></li><li><p>生产环境: 是项目代码正式运行的环境，一般是正式的服务器。</p></li></ul></div><p><strong>开发依赖:</strong> 只有开发环境用到的包，是开发依赖包。</p><p><strong>生产依赖:</strong> 开发环境、生产环境都要用的，是生产依赖包。</p><table tabindex="0"><thead><tr><th>操作</th><th>命令</th></tr></thead><tbody><tr><td>安装生产依赖</td><td><code>npm install &lt;package name&gt; --save</code> 或 <code>npm install &lt;package name&gt; -S</code></td></tr><tr><td>安装开发依赖</td><td><code>npm install &lt;package name&gt; --save-dev</code> 或 <code>npm i &lt;package name&gt; -D</code></td></tr></tbody></table><h4 id="_3-6-全局安装" tabindex="-1">3.6 全局安装 <a class="header-anchor" href="#_3-6-全局安装" aria-label="Permalink to &quot;3.6 全局安装&quot;">​</a></h4><p>使用 <code>-g</code> 配置可以进行全局安装，例如全局安装<code>nodemon</code>。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装 nodemon</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodemon</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看全局包的安装位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看全局包列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">说明：</p><ul><li>全局安装的命令不受工作目录位置影响</li><li>不是所有的包都适合全局安装，通常是命令行工具包，才适合全局安装。</li></ul></div><h4 id="_3-7-安装全部依赖" tabindex="-1">3.7 安装全部依赖 <a class="header-anchor" href="#_3-7-安装全部依赖" aria-label="Permalink to &quot;3.7 安装全部依赖&quot;">​</a></h4><p>通过<code>npm i</code>或<code>npm install</code>命令 ，可依据 <code>package.json</code>和<code>package-lock.json</code> 安装项目依赖。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 或</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>若只想安装生产依赖，可以使用<code>npm install --prod</code> 或 <code>npm i --omit=dev</code></p><h4 id="_3-8-删除包" tabindex="-1">3.8 删除包 <a class="header-anchor" href="#_3-8-删除包" aria-label="Permalink to &quot;3.8 删除包&quot;">​</a></h4><p>项目中可能需要删除某些不需要的包，可以使用下面的命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 局部删除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局删除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h4 id="_3-9-配置命令别名" tabindex="-1">3.9. 配置命令别名 <a class="header-anchor" href="#_3-9-配置命令别名" aria-label="Permalink to &quot;3.9. 配置命令别名&quot;">​</a></h4><p>通过配置命令别名可以更简单的执行命令，配置<code>package.json</code> 中的<code>scripts</code>属性</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node server.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>配置完成之后，可以使用别名执行命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start别名比较特别，使用时可以省略run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">补充说明：</p><ul><li><code>npm start</code> 是项目中常用的一个命令，一般用来启动项目。</li><li><code>npm run</code>有自动向上级目录查找的特性，跟<code>require</code> 函数也一样。</li><li>对于陌生的项目，我们可以通过查看 <code>scripts</code>属性来参考项目的一些操作。</li></ul></div><h3 id="_4-cnpm" tabindex="-1">4. cnpm <a class="header-anchor" href="#_4-cnpm" aria-label="Permalink to &quot;4. cnpm&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121340281.png" alt="image-20240812134021233" loading="lazy"></p><p><a href="https://www.npmmirror.com/" target="_blank" rel="noreferrer">cnpm</a>是一个<code>npm</code>的替代工具，<code>cnpm</code>服务器部署在国内，主要用于在国内优化<code>npm</code>包的下载速度，<code>cnpm</code>由淘宝团队创建和维护，又称：淘宝镜像。</p><ul><li><code>npm</code>原始服务器地址：<a href="https://registry.npmjs.org/" target="_blank" rel="noreferrer">https://registry.npmjs.org/</a></li><li><code>cnpm</code>服务器地址为：<a href="https://registry.npmmirror.com/" target="_blank" rel="noreferrer">https://registry.npmmirror.com/</a></li></ul><h4 id="_4-1-安装" tabindex="-1">4.1 安装 <a class="header-anchor" href="#_4-1-安装" aria-label="Permalink to &quot;4.1 安装&quot;">​</a></h4><p>对于cnpm的使用有两种方式：</p><ul><li>第一种方式：安装cnpm包管理器</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>该种方式是全局安装了cnpm包，以后全局用cnpm命令即可，cnpm兼容npm命令。</p><ul><li>第二种方式：仅修改npm服务器地址</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmmirror.com</span></span></code></pre></div><p>该种方式只是修改了npm服务器地址，以后还是用npm命令</p><p>查看服务器地址</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span></code></pre></div><h4 id="_4-2-nrm-的使用" tabindex="-1">4.2 nrm 的使用 <a class="header-anchor" href="#_4-2-nrm-的使用" aria-label="Permalink to &quot;4.2 nrm 的使用&quot;">​</a></h4><p><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a>（NPM Registry Manager）是一个用于管理<code>npm</code>注册表的工具，方便用户在多个<code>npm</code>注册表之间切换。它适用于在不同的<code>npm</code>源之间快速切换。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装nrm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nrm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出可用地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试各地址速度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到指定地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 别名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加新地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 别名</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> URL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 别名</span></span></code></pre></div><h3 id="_5-yarn" tabindex="-1">5. yarn <a class="header-anchor" href="#_5-yarn" aria-label="Permalink to &quot;5. yarn&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121404380.png" alt="image-20240812140425325" loading="lazy"></p><p><a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">yarn</a>是一个快速、可靠的依赖管理工具，由 Facebook 在 2016 年开发，<code>yarn</code>的优势如下：</p><ul><li><p><strong>速度</strong>：<code>yarn</code>使用并行安装机制来加快速度。</p></li><li><p><strong>缓存</strong>：<code>yarn</code>会缓存每个下载过的包，无需重复下载。</p></li><li><p><strong>界面</strong>：<code>yarn</code>提供更详细的输出，包括进度条等等。</p></li><li><p><strong>安全</strong>：<code>yarn</code>会通过算法校验每个安装包的完整性。</p></li></ul><blockquote><p>备注：以上 yarn 的优势，目前最新的 npm 也都基本具备了。</p></blockquote><h4 id="_5-1-安装" tabindex="-1">5.1 安装 <a class="header-anchor" href="#_5-1-安装" aria-label="Permalink to &quot;5.1 安装&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">配置环境变量</p><p>第一步：执行如下命令，得到<code>yarn</code>全局安装目录位置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global</span></span></code></pre></div><p>第二步：将该目录下的<code>.bin</code>文件夹配置到环境变量中</p><blockquote><p>C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules.bin</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121442632.png" alt="hjbl" loading="lazy"></p></div><h4 id="_5-2-yarn-常用命令" tabindex="-1">5.2 yarn 常用命令 <a class="header-anchor" href="#_5-2-yarn-常用命令" aria-label="Permalink to &quot;5.2 yarn 常用命令&quot;">​</a></h4><table tabindex="0"><thead><tr><th>yarn 命令</th><th>功能描述</th><th>对应 npm 命令</th></tr></thead><tbody><tr><td><code>yarn init</code></td><td>初始化包</td><td><code>npm init</code></td></tr><tr><td><code>yarn -v</code></td><td>查看版本号</td><td><code>npm -v</code></td></tr><tr><td><code>yarn add 包名</code></td><td>安装某个包</td><td><code>npm install 包名</code></td></tr><tr><td><code>yarn add 包名 -D</code></td><td>安装某个包（开发依赖）</td><td><code>npm install -D</code></td></tr><tr><td><code>yarn global add 包名</code></td><td>全局安装一个包</td><td><code>npm install 包名 -g</code></td></tr><tr><td><code>yarn global dir</code></td><td>查看全局安装位置</td><td><code>npm root -g</code></td></tr><tr><td><code>yarn global list</code></td><td>查看全局安装列表</td><td><code>npm list -g</code></td></tr><tr><td><code>yarn install</code></td><td>安装全部依赖</td><td><code>npm install</code></td></tr><tr><td><code>yarn remove 包名</code></td><td>删除包</td><td><code>npm remove 包名</code></td></tr><tr><td><code>yarn run 别名</code></td><td>运行命令别名</td><td><code>npm run 别名</code></td></tr></tbody></table><h3 id="_6-pnpm" tabindex="-1">6. pnpm <a class="header-anchor" href="#_6-pnpm" aria-label="Permalink to &quot;6. pnpm&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/EvanCookie/pictureBed@master/node/package/202408121450080.png" alt="image-20240812145033052" loading="lazy"></p><p><a href="https://pnpm.io/" target="_blank" rel="noreferrer">pnpm</a>（“performant npm”）是一个高效的包管理工具，与<code>npm</code>和<code>yarn</code>类似。它通过硬链接和软链接来共享依赖库，从而节省磁盘空间和加速安装过程。</p><h4 id="_6-1-安装" tabindex="-1">6.1 安装 <a class="header-anchor" href="#_6-1-安装" aria-label="Permalink to &quot;6.1 安装&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><p>将<code>C:\\Users\\tianyu\\AppData\\Local\\pnpm</code>添加到环境变量。</p><h4 id="_6-2-pnpm-常用命令" tabindex="-1">6.2 pnpm 常用命令 <a class="header-anchor" href="#_6-2-pnpm-常用命令" aria-label="Permalink to &quot;6.2 pnpm 常用命令&quot;">​</a></h4><table tabindex="0"><thead><tr><th>pnpm 命令</th><th>功能描述</th><th>对应 npm 命令</th></tr></thead><tbody><tr><td><code>pnpm init</code></td><td>初始化包</td><td><code>npm init</code></td></tr><tr><td><code>pnpm -v</code></td><td>查看版本号</td><td><code>npm -v</code></td></tr><tr><td><code>pnpm i 包名</code></td><td>安装某个包</td><td><code>npm i 包名</code></td></tr><tr><td><code>pnpm i 包名 -D</code></td><td>安装某个包（开发依赖）</td><td><code>npm i -D</code></td></tr><tr><td><code>pnpm i 包名 -g</code></td><td>全局安装一个包</td><td><code>npm i 包名 -g</code></td></tr><tr><td><code>pnpm root -g</code></td><td>查看全局安装位置</td><td><code>npm root -g</code></td></tr><tr><td><code>pnpm list -g</code></td><td>查看全局安装列表</td><td><code>npm list -g</code></td></tr><tr><td><code>pnpm i</code></td><td>安装全部依赖</td><td><code>npm i</code></td></tr><tr><td><code>pnpm remove 包名</code></td><td>删除包</td><td><code>npm remove 包名</code></td></tr><tr><td><code>pnpm run 别名</code></td><td>运行命令别名</td><td><code>npm run 别名</code></td></tr></tbody></table><h3 id="_7-发布自己的包" tabindex="-1">7. 发布自己的包 <a class="header-anchor" href="#_7-发布自己的包" aria-label="Permalink to &quot;7. 发布自己的包&quot;">​</a></h3><h4 id="_7-1-创建与发布" tabindex="-1">7.1 创建与发布 <a class="header-anchor" href="#_7-1-创建与发布" aria-label="Permalink to &quot;7.1 创建与发布&quot;">​</a></h4><p>我们可以将自己开发的工具包发布到 <code>npm</code> 服务上，方便自己和其他开发者使用，操作步骤如下：</p><ol><li>创建文件夹，并初始化成一个包，在 <code>package.json</code> 中填写包的信息（包名是唯一的）。</li><li>注册账号 <a href="https://www.npmjs.com/signup%EF%BC%8C%E5%B9%B6%E6%BF%80%E6%B4%BB%E8%B4%A6%E5%8F%B7%E3%80%82" target="_blank" rel="noreferrer">https://www.npmjs.com/signup，并激活账号。</a></li><li>将<code>npm</code>调整为修改为官方镜像。</li><li>执行<code>npm login</code>填写相关用户信息。</li><li>执行<code>npm publish</code>提交包。</li></ol><h4 id="_7-2-更新包" tabindex="-1">7.2 更新包 <a class="header-anchor" href="#_7-2-更新包" aria-label="Permalink to &quot;7.2 更新包&quot;">​</a></h4><p>后续可以对自己发布的包进行更新，操作步骤如下：</p><ol><li>更新包中的代码。</li><li>测试代码是否可用。</li><li>修改<code>package.json</code>中的版本号。</li><li>发布更新<code>npm publish</code>。</li></ol><h4 id="_7-3-删除包" tabindex="-1">7.3 删除包 <a class="header-anchor" href="#_7-3-删除包" aria-label="Permalink to &quot;7.3 删除包&quot;">​</a></h4><p>执行如下命令：<code>npm unpublish --force</code></p><p>删除包需要满足一定的条件：</p><ul><li>只有包的作者才能删除包。</li><li>发布必须小于 24 小时。</li><li>超 24 小时后，想删除必须满足：①没有其他依赖、② 周下载量小于 300 、③只有一个维护者。</li></ul>`,96),l=[e];function p(h,d,o,k,r,c){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{F as __pageData,y as default};
