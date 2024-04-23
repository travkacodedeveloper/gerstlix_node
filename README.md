# npm install gerstlix_node

## What is this? ##
Library for simplified access to the Gerstlix API

## Quick Guide ##
To access the methods of the module, you need to:
```js
const Gerstlix = require("gerstlix_node")
const gx = new Gerstlix({ token: "your_token" })
```

## Example ##
```js
const Gerstlix = require("gerstlix_node")
const gx = new Gerstlix({ token: "your_token" })

result = gx.get_members(server=3, fractionId=1)
print(result)
```
### Output ###
```json
{
    "success": true,
    "data": {
        "id": 1,
        "gid": 1,
        "nickname": "Gerstlix_Man",
        "vk_id": 11111,
        "discord_id": 1111,
        "fraction": 1,
        "created": "2024-04-10 00:00:00",
        "preds": 1,
        "vigs": 1,
        "balls": 1,
        "srok": 1,
        "method": 1
    }
}
```

## Currently available methods ##
```
   method name     |       params       | 
===================|====================|
.getMembers        | server, fractionId |
.getDeputy         | server, fractionId |
.getLeader         | server, fractionId |
.getMinister       | server, fractionId |
.getRecordFraction | server, fractionId |
.getPlayer         | server, player     |
.getStatus         | gameProject        |
.getInfo           | server             |
.getGhettoMap      | server             |
.getOldPlayers     | server             |
.getRichPlayers    | server             |
.getDeputyList     | server             |
.getLeadersList    | server             |
.getMinistersList  | server             |
.getRecords        | server             |
.getAdminsList     | server             |
.geoIp             | ip                 |
```
## Types of parameters ##
```
fractionId   : INTEGER
gameProject  : STRING [ arz, marz, rrp ]
player       : STRING
server       : INTEGER
ip           : IPv4
----------------------------------------
arz          : Arizona Role Play
marz         : Mobile Arizona Role Play
rrp          : Rodina Role Play
```

## Other information ##
[Gerstlix site](https://gerstlix.com/)
The module is specially designed for Gerstlix
