# 将庭 Java 版服务器管理员手册 

## 目录

[TOC]

## 概述

​	该文档的面向对象为将庭服运营团队



## 插件列表和常见问题



### 前置类



#### Vault - 经济前置

概述：权限、聊天和经济 API，主要做经济系统的前置

源：[保险库 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/vault.34315/)



#### ProtocolLib - 协议库前置

概述：协议库 API，简化开发和维护难度

源：[ProtocolLib [Jenkins\] (dmulloy2.net)](https://ci.dmulloy2.net/job/ProtocolLib/)



#### PlaceholderAPI - 占位符前置

概述：变量 API，可以显示各种插件的信息，包括服务器

源：[PlaceholderAPI | SpigotMC - High Performance Minecraft](https://www.spigotmc.org/resources/placeholderapi.6245/)

Wiki：[PlaceholderAPI 维基](https://wiki.placeholderapi.com/)

占位符列表：[占位符列表 - PlaceholderAPI Wiki](https://wiki.placeholderapi.com/users/placeholder-list/)



### 基础类



#### XConomy - 经济插件

概述：经济核心，提供基础的经济指令，包含跨服经济数据同步功能

源：[XConomy 系列 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/xconomy.75669/)



##### 如何设置 XConomy 为中文？

​	把 `plugins/XConomy/message.yml` 文件删除，`config.yml` 里改为 `language: Chinese`，最后重载



#### LuckPerms - 权限管理

概述：创建组和分配权限来控制玩家可以使用的功能，设置聊天前缀后缀

源：[LuckPerms 公司](https://luckperms.net/)

Wiki：[Home | Wiki | LuckPerms](https://luckperms.net/wiki/Home)



#### Multiverse - 多世界管理

概述：单端多世界管理，可以新建/删除世界/维度，世界间传送和权限控制

源：[Multiverse/Multiverse-Core：最初的 Bukkit Multi-World 插件！ (github.com)](https://github.com/Multiverse/Multiverse-Core)

Wiki：[首页 ·多元宇宙/多元宇宙核心 Wiki (github.com)](https://github.com/Multiverse/Multiverse-Core/wiki)

命令：[Command Reference · Multiverse/Multiverse-Core Wiki (github.com)](https://github.com/Multiverse/Multiverse-Core/wiki/Command-Reference)

权限：[权限 ·多元宇宙/多元宇宙核心 Wiki (github.com)](https://github.com/Multiverse/Multiverse-Core/wiki/Permissions)

世界属性：[World properties · Multiverse/Multiverse-Core Wiki (github.com)](https://github.com/Multiverse/Multiverse-Core/wiki/World-properties)



##### 如何设置第一出生点/默认世界？

​	假设用 mv 创建或导入一个名为 world_hub 的主世界作为服务器单独的主城世界，那么如何让玩家登录后进入该世界呢？ 

​	第一步，在游戏中输入`/mv conf firstspawnoverride true `，或者在`config.yml`中将`firstspawnoverride` 为 `true`

​	如果设置为 true，则会确保玩家在第一次出生时进入您用 Multiverse 设置的出生点。如果使用了其他的出生插件，请将其设置为false。

​	第二步，在游戏中输入`/mv conf firstspawnworld [世界名称]`这是希望玩家出生的世界名称。它不必是`server.properties` 中设置的那个世界！

​	第三步，在指定的世界中，设置生成点`/mv setspawn`

> [!TIP]
>
> 所以？为什么不直接从第二步执行呢？第一步不是摆设吗？确实如此。还有这么麻烦，我为什么不直接把主城文件复制粘贴到服务器默认的`world`文件夹里呢？别急，请看下一段



##### 如果有多个主世界，那么从下界返回该去哪个主世界？

​	如果有多个主世界，不修改其配置，那么它们的天气、时间、游戏模式等都是独立的，在哪个世界死亡就会在那个世界重生

​	那是不是意味着每个主世界都有独立的下界和末地呢？理论如此，但实际上不经过额外修改，所有主世界都共用一个下界和末地，服务器和插件不会生成新的下界和末地

​	所以从下界返回主世界，统一回到`server.properties/level-name=world`中设置的主世界

​	假设用 mv 创建或导入了 world_hub、world_res 两个主世界，在 world_hub、world_res 建造下界传送门进入下界后返回主世界，都会回到 world，而不是回 world_hub、world_res。

​	所以知道为什么要用 mv 设置默认世界了吗？因为这样可以避免在独立的主城世界里，后期出现不知从哪冒出的下界传送门

> [!TIP]
>
> 还有问题！在末地打败末影龙后，想传送回主世界却无效？！如果没在主世界设置床重生点，那么只会传送回末地的原点。别急，请看下一段“玩家死亡或通关后重生到哪个世界”部分



##### 如何设置世界别名/玩家死亡或通关后重生到哪个世界/进入世界的费用等？

​	使用别名，将变量 `%multiverse_world_alias%` 写到想展示世界别名的插件配置里

​	当然，这个插件要支持使用 papi 变量，接着重载那个插件

​	进入 `plugins/Multiverse-Core/worlds.yml`

```yaml
world:
    ==: MVWorld
    # 是否隐藏世界
    hidden: 'false' 
    # 世界别名
    alias: world 
    # 世界别名颜色，必须是 AQUA, BLACK, BLUE, DARKAQUA, DARKBLUE, DARKGRAY, DARKGREEN, DARKPURPLE, DARKRED, GOLD, GRAY, GREEN, LIGHTPURPLE, RED, YELLOW, WHITE
    color: WHITE 
    # 世界别名样式，必须是 NORMAL, MAGIC, BOLD, STRIKETHROUGH, UNDERLINE, ITALIC
    style: NORMAL 
    # 是否允许玩家 PVP
    pvp: 'true'
    # 世界缩放比例
    scale: '1.0'
    # 玩家死亡或通关后重生的世界，空字符串意味着在这个世界内重生
    respawnWorld: ''
    # 是否允许天气变化
    allowWeather: 'true'
    # 游戏难度
    difficulty: EASY
    # 控制动物和怪物是否生成以及生成率
    spawning:
      ==: MVSpawnSettings
      animals:
        ==: MVSpawnSubSettings
        # 动物是否生成
        spawn: 'true'
        spawnrate: '-1'
        exceptions: []
      monsters:
        ==: MVSpawnSubSettings
        # 怪物是否生成
        spawn: 'true'
        spawnrate: '-1'
        exceptions: []
    # 进入这个世界的费用，这里设置为免费
    entryfee:
      ==: MVEntryFee
      amount: '0.0'
    # 是否启用饥饿
    hunger: 'true'
    # 是否启用自动恢复生命值
    autoHeal: 'true'
    # 调整重生点
    adjustSpawn: 'true'
    # 传送门形式
    portalForm: ALL
    # 默认游戏模式
    gameMode: SURVIVAL
    # 保持重生点在内存中加载
    keepSpawnInMemory: 'true'
    # 定义重生点位置
    spawnLocation:
      ==: MVSpawnLocation
      x: -64.0
      y: 71.0
      z: 48.0
      pitch: 0.0
      yaw: 0.0
    # 是否启用自动加载世界
    autoLoad: 'true'
    # 是否启用通过床来重生
    bedRespawn: 'true'
    # 世界黑名单列表，这里为空，表示世界没有被禁止
    worldBlacklist: []
    # 世界类型
    environment: NORMAL
    # 世界种子
    seed: '3160907858691774979'
    # 地形生成器，null 表示使用默认的地形生成器
    generator: 'null'
    # 玩家数量限制，-1 为不限制
    playerLimit: '-1'
    # 是否允许飞行
    allowFlight: 'true'
```



##### 管理员在切换世界时，游戏模式也切换了！

​	Multiverse-Core 的新版本包括防止自动模式切换的额外权限。此权限采用以下格式：

```
mv.bypass.gamemode.WORLD_NAME
```

​	有了这个新权限，服务器所有者可以选择特定用户在他们之间传送时忽略每个世界的部分（或全部）游戏模式设置。例如，拥有的玩家可以是管理员，即使在生存世界中也能保持他们的创造模式设置。只需在喜欢的插件中设置正确的权限，就可以开始了。`mv.bypass.gamemode.*`



##### Multiverse 说它不能带我去一个地方，因为它不安全！

​	有时 Minecraft 会将生成点设置在不可接受的位置（远低于地面），并且 Minecraft 服务器会接管生成。MV2 会处理这个问题，因此它永远不会将玩家带到不安全的地方。但是，这会产生冲突。要解决此问题，只需按照以下说明操作即可：

​	`/mvtp myworld` 提示 “那个世界不安全”。忽略，执行指令`/mvconfirm`。去到一个合适的地方设置生成点`/mv set spawn`



#### DeluxeMenus - 菜单

源：[DeluxeMenus [Jenkins\] (extendedclip.com)](https://ci.extendedclip.com/job/DeluxeMenus/)

Wiki：[DeluxeMenus | HelpChat Wiki](https://wiki.helpch.at/helpchat-plugins/deluxemenus)



### 拓展类



#### Citizens2 - NPC 插件

概述：通过 NPC 创建各类玩法、支持所有生物类型、简易 NPC 对话和商店，指令绑定等

源：[Citizens2 [Jenkins\] (citizensnpcs.co)](https://ci.citizensnpcs.co/job/Citizens2/)

Wiki：[公民维基 (citizensnpcs.co)](https://wiki.citizensnpcs.co/Citizens_Wiki)

命令：[命令 - Citizens Wiki (citizensnpcs.co)](https://wiki.citizensnpcs.co/Commands)

常见问题：[常见问题 - Citizens Wiki (citizensnpcs.co)](https://wiki.citizensnpcs.co/Frequently_Asked_Questions)



#### HuskHomes - 传送套件

概述：玩家间传送、设置传送点、设置私人或公共家园传送点、返回死亡点，随机传送和经济成本设置

源：[HuskHomes [1.17-1.21\] |设置房屋 |经纱 |生成 |Tp 和 Tpa |公共住宅 |跨服务器工作 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/huskhomes-1-17-1-21-set-homes-warps-spawn-tp-and-tpa-public-homes-works-cross-server.83767/)

Wiki：[首页 – HuskHomes Docs – William278.net - William278.net](https://william278.net/docs/huskhomes)



#### TAB - 标签/Bossbar/计分板

概述：通过选项卡显示玩家列表和信息，侧边栏计分板、头顶显示信息、前缀后缀等

源：[TAB [1.5 - 1.21.1\] |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/tab-1-5-1-21-1.57806/)

Wiki：[首页 ·NEZNAMY/TAB 维基 (github.com)](https://github.com/NEZNAMY/TAB/wiki)

命令/权限：[Commands & Permissions · NEZNAMY/TAB Wiki (github.com)](https://github.com/NEZNAMY/TAB/wiki/Commands-&-Permissions)

功能列表：[Feature guide: Belowname · NEZNAMY/TAB Wiki (github.com)](https://github.com/NEZNAMY/TAB/wiki/Feature-guide:-Belowname#about)



#### DecentHolograms - 全息图

概述：全息图/悬浮字/浮空字，用来展示文本和数据信息

源：[体面的全息图 |1.8 - 1.21.1 |PAPI 支持 |无依赖 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/decentholograms-1-8-1-21-1-papi-support-no-dependencies.96927/)

Wiki：[欢迎 - DecentHolograms Wiki](https://wiki.decentholograms.eu/)



##### 导入配置好的全息图未在预想的世界出现？

​	转到`plugins\DecentHolograms\holograms`

```yaml
# 位置:世界:坐标
location: world:5.500:100.000:0.500
```



##### 如何在全息图中显示占位符？

​	首先，确保安装了 PlaceholderAPI，以 `player` 占位符为例。在游戏中执行 `/papi ecloud download Player`，随后`/papi reload`

​	最后，在游戏或配置里的全息图文本添加变量即可，示例全息图显示玩家名称：

```yaml
location: world_hub:-10.500:100.000:-10.500
enabled: true
display-range: 64
update-range: 64
update-interval: 20
facing: 0.0
down-origin: false
pages:
- lines:
  - content: '&f&b%player_name%'
    height: 0.3
```



##### 如何用全息图显示伤害和生命值恢复？

​	转到`plugins\DecentHolograms\config.yml`

​	伤害显示

```yaml
damage-display:
  # 您想启用此功能吗？ [true/false]
  enabled: false
  # 你想为玩家显示伤害吗？ [true/false]
  players: true
  # 你想对生物显示伤害吗？ [true/false]
  mobs: true
  # 您想显示0（或更小）的伤害吗？ [true/false]
  zero-damage: false
  # 临时全息图的存在时长
  duration: 40
  # 伤害占位符: {damage}
  # 动画和占位符在此处有效
  appearance: '&c{damage}'
  # 如果伤害是致命的，其外观效果
  critical-appearance: '&4&l暴击!&4 {damage}'
  # 高度偏移
  height: 0
```

​	生命值恢复显示

```yaml
healing-display:
  # 您想启用此功能吗? [true/false]
  enabled: false
  # 你想为玩家显示治疗效果吗? [true/false]
  players: true
  # 你想为生物显示治疗效果吗? [true/false]
  mobs: true
  # 临时全息图的存在时长
  duration: 40
  # 生命值占位符: {heal}
  # 动画和占位符在此处有效
  appearance: '&a+ {heal}'
  # 高度偏移
  height: 0
```



#### ajLeaderboards - 排行榜

概述：与全息图搭配使用，可以创建各类数据排行榜

源：[aj排行榜 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/ajleaderboards.85548/)

Wiki：[Setup | aj's Plugins Wiki (ajg0702.us)](https://wiki.ajg0702.us/ajLeaderboards/setup/)



#### MiniMOTD - 服务器 MOTD 显示

概述：用于多人游戏界面，服务器对外展示的自定义文本

源：[MiniMOTD - 具有 RGB 渐变的服务器列表 MOTD 插件 |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/minimotd-server-list-motd-plugin-with-rgb-gradients.81254/)

Wiki：[首页 ·jpenilla/MiniMOTD 维基 (github.com)](https://github.com/jpenilla/MiniMOTD/wiki)



#### LiteSignIn - 签到

概述：自带 GUI 签到、加入信息、签到奖励设置、签到排行榜

源：[Lite 登录 [1.7-1.21\] |签到奖励 |胸部 GUI |排行榜 |MySQL & SQLite |SpigotMC - 高性能 Minecraft](https://www.spigotmc.org/resources/lite-sign-in-1-7-1-21-sign-in-rewards-chest-gui-leaderboard-mysql-sqlite.79584/)



### 插件备忘录

- 物品绑定指令（右键打开菜单）、自动补足

- 在线时长奖励插件



