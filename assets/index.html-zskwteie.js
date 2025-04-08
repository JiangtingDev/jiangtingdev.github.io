import{_ as i,c as a,a as n,o as e}from"./app-DNZPal1Y.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="citizens2-npc-插件" tabindex="-1"><a class="header-anchor" href="#citizens2-npc-插件"><span>Citizens2 - NPC 插件</span></a></h2><p>概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等</p><p>是否可替代：是（MythicMobs：可以自定义模型创建 NPC）</p><p>源：https://ci.citizensnpcs.co/job/Citizens2/</p><p>Wiki：https://wiki.citizensnpcs.co/Citizens_Wiki</p><p>命令：https://wiki.citizensnpcs.co/Commands</p><p>常见问题：https://wiki.citizensnpcs.co/Frequently_Asked_Questions</p><h2 id="tab-标签-bossbar-计分板" tabindex="-1"><a class="header-anchor" href="#tab-标签-bossbar-计分板"><span>TAB - 标签/Bossbar/计分板</span></a></h2><p>概述：通过选项卡显示玩家列表和信息，侧边栏计分板、头顶显示信息、前缀后缀等</p><p>是否可替代：否，已是同类型最佳</p><p>源：https://www.spigotmc.org/resources/57806/</p><p>Wiki：https://github.com/NEZNAMY/TAB/wiki</p><p>命令/权限：https://github.com/NEZNAMY/TAB/wiki/Commands-&amp;-Permissions</p><p>功能列表：https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname#about</p><h2 id="huskhomes-传送套件" tabindex="-1"><a class="header-anchor" href="#huskhomes-传送套件"><span>HuskHomes - 传送套件</span></a></h2><p>概述：玩家间传送、设置传送点、设置私人或公共家园传送点、返回死亡点，随机传送和经济成本设置</p><p>是否可替代：否，已是同类型最佳</p><p>源：https://www.spigotmc.org/resources/83767/</p><p>Wiki：https://william278.net/docs/huskhomes</p><h2 id="litesignin-签到" tabindex="-1"><a class="header-anchor" href="#litesignin-签到"><span>LiteSignIn - 签到</span></a></h2><p>概述：自带 GUI 签到、加入信息、签到奖励设置、签到排行榜</p><p>是否可替代：否</p><p>源：https://www.spigotmc.org/resources/79584/</p><h2 id="decentholograms-全息图" tabindex="-1"><a class="header-anchor" href="#decentholograms-全息图"><span>DecentHolograms - 全息图</span></a></h2><p>概述：全息图/悬浮字/浮空字，用来展示文本和数据信息</p><p>是否可替代：否，已是同类型最佳</p><p>源：https://www.spigotmc.org/resources/96927/</p><p>Wiki：https://wiki.decentholograms.eu/</p><h3 id="导入配置好的全息图未在预想的世界出现" tabindex="-1"><a class="header-anchor" href="#导入配置好的全息图未在预想的世界出现"><span>导入配置好的全息图未在预想的世界出现？</span></a></h3><p>转到<code>plugins\\DecentHolograms\\holograms</code></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 位置:世界:坐标</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">location</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> world:5.500:100.000:0.500</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何在全息图中显示占位符" tabindex="-1"><a class="header-anchor" href="#如何在全息图中显示占位符"><span>如何在全息图中显示占位符？</span></a></h3><p>首先，确保安装了 PlaceholderAPI，以 <code>player</code> 占位符为例。在游戏中执行 <code>/papi ecloud download Player</code>，随后<code>/papi reload</code></p><p>最后，在游戏或配置里的全息图文本添加变量即可，示例全息图显示玩家名称：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">location</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> world_hub:-10.500:100.000:-10.500</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">display-range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 64</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">update-range</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 64</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">update-interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">facing</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.0</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">down-origin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">pages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">-</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> lines</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&amp;f&amp;b%player_name%</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何用全息图显示伤害和生命值恢复" tabindex="-1"><a class="header-anchor" href="#如何用全息图显示伤害和生命值恢复"><span>如何用全息图显示伤害和生命值恢复？</span></a></h3><p>转到<code>plugins\\DecentHolograms\\config.yml</code></p><p>伤害显示</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">damage-display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 您想启用此功能吗？ [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 你想为玩家显示伤害吗？ [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  players</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 你想对生物显示伤害吗？ [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  mobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 您想显示0（或更小）的伤害吗？ [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  zero-damage</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 临时全息图的存在时长</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 40</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 伤害占位符: {damage}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 动画和占位符在此处有效</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  appearance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&amp;c{damage}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 如果伤害是致命的，其外观效果</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  critical-appearance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&amp;4&amp;l暴击!&amp;4 {damage}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 高度偏移</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生命值恢复显示</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">healing-display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 您想启用此功能吗? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 你想为玩家显示治疗效果吗? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  players</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 你想为生物显示治疗效果吗? [true/false]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  mobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 临时全息图的存在时长</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 40</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 生命值占位符: {heal}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 动画和占位符在此处有效</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  appearance</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&amp;a+ {heal}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 高度偏移</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajleaderboards-排行榜" tabindex="-1"><a class="header-anchor" href="#ajleaderboards-排行榜"><span>ajLeaderboards - 排行榜</span></a></h2><p>概述：与全息图搭配使用，可以创建各类数据排行榜</p><p>是否可替代：否，已是同类型最佳</p><p>源：https://www.spigotmc.org/resources/85548/</p><p>Wiki：https://wiki.ajg0702.us/ajLeaderboards/setup/</p><h2 id="minimotd-服务器-motd-显示" tabindex="-1"><a class="header-anchor" href="#minimotd-服务器-motd-显示"><span>MiniMOTD - 服务器 MOTD 显示</span></a></h2><p>概述：用于多人游戏界面，服务器对外展示的自定义文本</p><p>是否可替代：否，已是同类型最佳</p><p>源：https://www.spigotmc.org/resources/81254/</p><p>Wiki：https://github.com/jpenilla/MiniMOTD/wiki</p><h2 id="plugin-hide-pro-插件隐藏" tabindex="-1"><a class="header-anchor" href="#plugin-hide-pro-插件隐藏"><span>Plugin Hide Pro - 插件隐藏</span></a></h2><p>概述：隐藏插件信息，仅向玩家提示能看到的插件，自定义阻止信息</p><p>是否可替代：是（利用 Luckperms 取消权限节点即可，但不优雅）</p><p>源：https://www.spigotmc.org/resources/77112/</p><p>Wiki：https://github.com/Nononitas/Plugin-Hide-Pro/wiki</p>`,56)]))}const k=i(l,[["render",p]]),d=JSON.parse('{"path":"/%E5%B0%86%E5%BA%AD%E6%96%87%E6%A1%A3/zwh6reb2/","title":"拓展类","lang":"zh-CN","frontmatter":{"title":"拓展类","createTime":"2024/12/17 18:46:27","permalink":"/将庭文档/zwh6reb2/","description":"Citizens2 - NPC 插件 概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等 是否可替代：是（MythicMobs：可以自定义模型创建 NPC） 源：https://ci.citizensnpcs.co/job/Citizens2/ Wiki：https://wiki.citizensnpcs.co/C...","head":[["meta",{"property":"og:url","content":"https://www.jtmc.cc/%E5%B0%86%E5%BA%AD%E6%96%87%E6%A1%A3/zwh6reb2/"}],["meta",{"property":"og:site_name","content":"将庭服服务台"}],["meta",{"property":"og:title","content":"拓展类"}],["meta",{"property":"og:description","content":"Citizens2 - NPC 插件 概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等 是否可替代：是（MythicMobs：可以自定义模型创建 NPC） 源：https://ci.citizensnpcs.co/job/Citizens2/ Wiki：https://wiki.citizensnpcs.co/C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-18T15:36:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-18T15:36:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"拓展类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-18T15:36:52.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.78,"words":833},"git":{"updatedTime":1734536212000,"contributors":[{"name":"ShengXiaLio","username":"ShengXiaLio","email":"sapling2023@gmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ShengXiaLio?v=4","url":"https://github.com/ShengXiaLio"}]},"autoDesc":true,"filePathRelative":"notes/将庭文档/管理员手册/插件配置/拓展.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"041844","sort":10001,"name":"将庭文档"},{"id":"572aaa","sort":10002,"name":"管理员手册"},{"id":"9285b5","sort":10003,"name":"插件配置"}]}');export{k as comp,d as data};
