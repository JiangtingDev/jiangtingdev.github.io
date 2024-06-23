## 将庭服 Java版服务器更新日志

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
