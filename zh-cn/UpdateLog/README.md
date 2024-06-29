## 将庭服 Java版服务器更新日志

### v0.4 2024-6-30（待完成）
- 更新Minecraft版本至purpur-1.21-2251
- 添加定时备份存档，并上传至云服务器
- 添加mcmmo的GUI界面，并加入主菜单
- 添加商店，并加入主菜单
- 将签到奖励改为随机数，并添加积分（货币）奖励
- 添加插件（3个）：Backuper-2.0.3a、mcMmoView-1.0.9、ShopGUI+ 1.97.0
- 更新插件（3个）：mcMMO-2.2.014、Citizens-2.0.35-b3451、CMILib 1.5.0.3

### v0.3.1 2024-6-29
- 删除菜单测试文件，保留主菜单

### v0.3 2024-6-28
- 更新Minecraft版本purpur-1.21-2249
- 全面优化启动程序
- 全面优化服务器配置
- 开启CMI经济
- 向玩家开放CMI Vault 货币交易权限 /pay 玩家转账
- 向玩家开放CMI Money 允许跨世界转账
- 向玩家开放CMI拒绝他人传送请求权限
- 向玩家开放Mv允许前往世界出生点的权限（传送回城）
- 禁止向玩家开放bukkit查看服务器pl/plugins插件列表权限
- 禁止向玩家开放bukkit查看服务器ver/version版本权限
- 禁止向玩家开放bukkit查看服务器about插件概览权限
- 禁止向玩家开放bukkit查看服务器？/help帮助权限（如需插件帮助请使用插件帮助指令，如/mcmmo help 而不是服务器帮助指令/?和/help）
- 设置Residence仅在家园世界使用，并且领地费用与CMI Vault经济对接 
- 设置玩家在主城死亡在主城复活，在其他世界死亡一律在家园世界复活
- 添加白名单功能，在群内发送验证码将游戏账号绑定QQ
- 将玩家数据从名字储存方式更改并迁移为UUID储存方式（正版玩家改名后，延续旧名字数据而不是新建一个玩家数据）
- 添加插件（4个）：DeluxeMenus-1.14.0-Release、LiteSignIn-1.8.1.4、Residence5.1.5.0、Jiangting-Core-1.0-SNAPSHOT
- 更新插件（4个）：Citizens-2.0.35-b3445、CMI-9.7.4.1、CMILib1.5.0.2、mcMMO-2.2.013

### v0.2.3 2024-6-23
- 向玩家开放CMI玩家传送功能权限 /tpa 对方玩家名 /tpaccept 接受对方传送请求（不需要输入指令，有提示）
- 向玩家开放CMI传回死亡点功能 /back 传送回死亡点，无地点数量限制，可以返回上上个死亡点
- 向玩家开放CMI安全传回死亡点功能 /tpbypass 安全传送回死亡点，/back无法使用时使用（比如死在岩浆里，返回会传送到岩浆附近陆地）
- 向玩家开放CMI世界传送功能权限，用于解决从下界返回主世界会卡边界墙的问题 /world 世界名（仅开放从下界返回world_home、world_resource两个世界的权限，该方案不完美，传送回时大概率遭遇窒息）
- 向玩家开放Mv世界传送功能权限 /mvtp 世界名称（目前世界有world、world_home、world_resource）
- 添加插件（1个）：LuckPerms-Bukkit-5.4.134
- 删除插件（1个）：SimpleTpa-7.1

### v0.2.2 2024-6-22
- 设置世界边界750x750

### v0.2.1 2024-6-21
- 删除0.1主世界

### v0.2 2024-6-20

- 更新至1.21
- 更新Minecraft版本 purpur-1.21-2238
- 添加主城世界
- 创建资源世界
- 创建家园世界
- 添加插件（5个）：CMI-9.7.4.0、CMILib1.5.0.1、mcMMO-2.2.012、Vault-1.7.4、PlaceholderAPI-2.11.6
- 更新插件（2个）：Citizens-2.0.35-b3437、SimpleTpa-7.1
- 删除插件（1个）：ViaVersion-5.0.0

### v0.1 2024-6-18

- 服务器内测上线
- Minecraft版本 purpur-1.20.6-2233兼容1.21
- 添加插件（5个）：Citizens-2.0.34-b3429、multiverse-core-4.3.12、SimpleTpa-7.0、spark-1.10.73-bukkit、ViaVersion-5.0.0
