# 💻城市消防远程监控系统——前端
  --基础语言：HTML、CSS、JavaScript </br>--辅助语言：NodeJS、Scss、axios  </br>--辅助框架：Element、Echarts、iView
  
  --核心语言：Vue（由基于Vue2的Vue-cli框架搭建）
  </br></br></br>
  
  --开发目的：用于城市消防的远程监控，降低并防范区域的消防事件发生。
  
  --实现功能：城市消防远程监控前端系统包括前端的PC端和APP端组成，整个城市消防远程监控系统会通过PC端和APP端与通过物联网技术的后端共同实现集火灾报警、隐患排查、维保巡查、值班数据、异常数据，巡检巡查等主要功能以及扩展功能于一体的系统，现阶段以烟台市为监控城市，对烟台市受监控地区进行24小时不间断地消防远程监控，保证消防系统安全、可靠、有效地运行，从而实现消防信息的实时接收、城市消防在多便携设备上的远程监控和管理。
  

# 🔴后端开发文档
--核心语言：Django

--实现功能：登录校验、接口配置

## 基础配置

API URL位于src/utils/global.js文件中，当前debug API URL为

```
http://192.168.123.178:8000/
```

数据库配置：

```
host : 81.70.163.10
port : 3306
database name : ufp
user : ufp
password : 564ea17a9b
```



## 设备档案相关API接口

### **1. 查询联网单位列表**

**接口功能**

> 查询全部联网单位信息、通过联网单位名称模糊查询联网单位信息。

###### URL

> /company/onlinecompany/

**HTTP请求方式**

> GET

**请求参数**

> | 参数 | 必需 | 类型   | 说明                 |
> | ---- | ---- | ------ | -------------------- |
> | name | 否   | string | 联网单位名称模糊查询 |

**返回字段**

> | 返回字段          | 字段类型 | 说明                                                         |
> | ----------------- | -------- | ------------------------------------------------------------ |
> | code              | int      | 返回结果状态。20000：正常；其他：错误，错误原因详见message字段。 |
> | message           | string   | 错误原因                                                     |
> | total             | int      | 数据总条数                                                   |
> | onlinecompanylist | list     | 联网单位列表                                                 |
>
> ###### onlinecompanylist字段详细说明
>
> | 字段                    | 字段类型 | 说明                              |
> | ----------------------- | -------- | --------------------------------- |
> | id                      | int      | 联网单位的编号                    |
> | name                    | string   | 联网单位的名称                    |
> | type                    | string   | 联网单位的类型                    |
> | city                    | string   | 联网单位所在城市                  |
> | address                 | string   | 联网单位的具体地址                |
> | area                    | float    | 联网单位的面积                    |
> | staff_number            | int      | 联网单位的员工数                  |
> | founding_date           | string   | 联网单位的成立时间                |
> | plan                    | string   | 联网单位的平面结构图(对象存储url) |
> | legal_person_name       | string   | 法人名称                          |
> | legal_person_idcard     | string   | 法人身份证号                      |
> | safety_person_name      | string   | 消防安全负责人名称                |
> | safety_person_idcard    | string   | 消防安全责任人身份证号            |
> | fire_control_room_phone | string   | 消控室电话                        |
> | safety_person_phone     | string   | 消防安全责任人手机                |
> | safety_manager_name     | string   | 安全管理人姓名                    |
> | safety_manager_phone    | string   | 安全管理人电话                    |
> | fire_rating             | string   | 消防等级                          |
> | maintenance_unit        | string   | 维保单位                          |
> | fire_emergency_plan     | string   | 消防应急预案                      |
>
>

**接口示例**

> BASEURL/company/onlinecompany/?name=联网

**返回结果示例**

```
{
    "code": 20000,
    "message": "",
    "total": 2,
    "onlinecompanylist": [
        {
            "id": 1,
            "name": "联网单位1",
            "type": "消防重点单位",
            "city": "烟台",
            "address": "烟台市黄务街道港城西大街69号",
            "area": 132.0,
            "staff_number": 456,
            "founding_date": null,
            "plan": "1",
            "legal_person_name": null,
            "legal_person_idcard": null,
            "safety_person_name": null,
            "safety_person_idcard": null,
            "fire_control_room_phone": null,
            "safety_person_phone": null,
            "safety_manager_name": null,
            "safety_manager_phone": null,
            "fire_rating": null,
            "maintenance_unit": null,
            "fire_emergency_plan": null
        },
        {
            "id": 2,
            "name": "联网单位2",
            "type": null,
            "city": null,
            "address": null,
            "area": null,
            "staff_number": null,
            "founding_date": null,
            "plan": null,
            "legal_person_name": null,
            "legal_person_idcard": null,
            "safety_person_name": null,
            "safety_person_idcard": null,
            "fire_control_room_phone": null,
            "safety_person_phone": null,
            "safety_manager_name": null,
            "safety_manager_phone": null,
            "fire_rating": null,
            "maintenance_unit": null,
            "fire_emergency_plan": null
        }
    ]
}
```



### **2. 查询设备类型列表**

**接口功能**

> 查询消防设备类型，注意：类型分为两级，二级分类用于在新增设备时填充设备类型的下拉框。

###### URL

> /apparatus/apparatustype/

**HTTP请求方式**

> GET

**请求参数**

> | 参数      | 参数类型 | 说明                                                         |
> | --------- | -------- | ------------------------------------------------------------ |
> | parent_id | int      | 二级消防设备类型所属的一级类型。当该参数为空或为0时返回全部的一级消防设备类型。 |

**返回字段**

> | 返回字段          | 字段类型 | 说明                                                         |
> | ----------------- | -------- | ------------------------------------------------------------ |
> | code              | int      | 返回结果状态。20000：正常；其他：错误，错误原因详见message字段。 |
> | message           | string   | 错误原因                                                     |
> | total             | int      | 数据条数                                                     |
> | apparatustypelist | list     | 消防设备类型列表                                             |
>
> ###### apparatustypeslist字段详细说明
>
> | 字段        | 字段类型 | 说明                           |
> | ----------- | -------- | ------------------------------ |
> | id          | int      | 消防设备类型的编号             |
> | name        | string   | 消防设备类型的名称             |
> | description | string   | 消防设备类型的描述             |
> | parent_id   | int      | 二级消防设备类型所属的一级类型 |
>
>

**接口示例**

> BASEURL/apparatus/apparatustype/

**返回结果示例**

```
{
   "code":20000,
   "message":"",
   "total":7,
   "apparatustypelist":[
       {
           "id":1,
           "name":"消防用水监测系统",
           "description":null,
           "parent_id":0
       },
       {
           "id":2,
           "name":"电气火灾监测系统",
           "description":null,
           "parent_id":0
       }
   ]
}
```

**接口示例**

> BASEURL/apparatus/apparatustype/?parent_id=1

**返回结果示例**

```
{
"code":20000,
"message":"",
"total":4,
"apparatustypelist":[
 {
   "id":8,
   "name":"消防水池",
   "description":null,
   "parent_id":1
 },
 {
   "id":9,
   "name":"高位消防水箱",
   "description":null,
   "parent_id":1
 }
]
}
```



### **3. 查询某联网单位某类型的设备列表**

**接口功能**

> 根据联网单位的id和设备类型的id查询对应单位对应类型的消防设备列表

###### URL

> /apparatus/apparatus/

**HTTP请求方式**

> GET

**请求参数**

> | 参数             | 必需 | 类型   | 说明                                         |
> | ---------------- | ---- | ------ | -------------------------------------------- |
> | company_id       | 是   | int    | 联网单位的id                                 |
> | apparatustype_id | 否   | int    | 设备类型的id，为空时返回该联网单位全部的设备 |
> | name             | 否   | string | 设备名称的模糊查询                           |
> | pagesize         | 否   | int    | 分页查询，每页的数量，默认10                 |
> | pagenum          | 否   | int    | 分页查询，第几页，默认1                      |

**返回字段**

> | 返回字段      | 字段类型 | 说明                                                         |
> | ------------- | -------- | ------------------------------------------------------------ |
> | code          | int      | 返回结果状态。20000：正常；其他：错误，错误原因详见message字段。 |
> | message       | string   | 错误原因                                                     |
> | total         | int      | 数据总条数。注意：是数据库中符合companyid、apparatustypeid、name查询条件的所有数据数目，并不是分页后的数目。 |
> | apparatuslist | list     | 消防设备列表                                                 |
>
> ###### apparatuslist字段详细说明
>
> | 字段                      | 字段类型 | 说明                               |
> | ------------------------- | -------- | ---------------------------------- |
> | id                        | int      | 消防设备的id                       |
> | number                    | string   | 消防设备的编号                     |
> | name                      | string   | 消防设备的名称                     |
> | type                      | string   | 消防设备的类型                     |
> | status                    | string   | 消防设备的状态 (离线/在线)         |
> | address                   | string   | 消防设备的安装位置                 |
> | company_id                | int      | 联网单位的id                       |
> | apparatustype_id          | int      | 设备一级类型的id                   |
> | iot_card_number           | string   | 物联网卡号                         |
> | transport_number          | string   | 传输装置编码                       |
> | install_date              | datetime | 安装日期                           |
> | lnglat                    | varchar  | 经纬度，格式：104.146362,31.165137 |
> | art                       | varchar  | 报警电话                           |
> | installation_person_name  | varchar  | 安装人员姓名                       |
> | installation_person_phone | varchar  | 安装人员电话                       |
> | ps                        | varchar  | 备注                               |
>
>

**接口示例**

> BASEURL/apparatus/apparatus/?company_id=1&apparatustype_id=1

**返回结果示例**

```
{
    "code": 20000,
    "message": "",
    "total": 23,
    "apparatuslist": [
        {
            "id": 3,
            "name": "4ADD182440206",
            "number": "4ADD182440206",
            "type": "电气火灾监控警报器",
            "status": "离线",
            "address": "宾馆前台",
            "company_id": 1,
            "apparatustype_id": 2,
            "iot_card_number": "4543541",
            "transport_number": "46541651",
            "install_date": "2021-03-01 10:27:36",
            "lnglat": "104.146362,31.165137",
            "art": "119",
            "installation_person_name": "张三",
            "installation_person_phone": "123456789",
            "ps": "无"
        },
        {
            "id": 4,
            "name": "4ADD182440206",
            "number": "4ADD182440206",
            "type": "电气火灾监控探测器",
            "status": "离线",
            "address": "宾馆前台",
            "company_id": 1,
            "apparatustype_id": 2,
            "iot_card_number": null,
            "transport_number": null,
            "install_date": null,
            "lnglat": null,
            "art": null,
            "installation_person_name": null,
            "installation_person_phone": null,
            "ps": null
        }
    ]
}
```



### **4. 修改/新增设备**

**接口功能**

> 根据消防设备的id修改设备信息，id为空或id=0时为新增设备。

###### URL

> /apparatus/apparatus/

**HTTP请求方式**

> POST

**请求参数**

> | 字段                      | 是否必需 | 字段类型 | 说明                                         |
> | ------------------------- | -------- | -------- | -------------------------------------------- |
> | id                        | 否       | int      | 消防设备的id，id为空或id = 0时为新增设备     |
> | number                    | 否       | string   | 消防设备的编号                               |
> | name                      | 否       | string   | 消防设备的名称                               |
> | type                      | 否       | string   | 消防设备的类型                               |
> | status                    | 否       | string   | 消防设备的状态 (离线/在线)                   |
> | address                   | 否       | string   | 消防设备的安装位置                           |
> | company_id                | 否       | int      | 联网单位的id，修改设备信息时无需提供这个字段 |
> | apparatustype_id          | 否       | int      | 设备类型的id，修改设备信息时无需提供这个字段 |
> | iot_card_number           | 否       | string   | 物联网卡号                                   |
> | transport_number          | 否       | string   | 传输装置编码                                 |
> | install_date              | 否       | datetime | 安装日期                                     |
> | lnglat                    | 否       | string   | 经纬度，格式：104.146362,31.165137           |
> | art                       | 否       | string   | 报警电话                                     |
> | installation_person_name  | 否       | string   | 安装人员姓名                                 |
> | installation_person_phone | 否       | string   | 安装人员电话                                 |
> | ps                        | 否       | string   | 备注                                         |

**返回字段**

> | 返回字段 | 字段类型 | 说明                                                         |
> | -------- | -------- | ------------------------------------------------------------ |
> | code     | int      | 返回结果状态。20000：正常；其他：错误，错误原因详见message字段。 |
> | message  | string   | 错误原因                                                     |
>

**接口示例**

> BASEURL/apparatus/apparatus/
>

Request Body :

```
{
    "name": "4ADD182440206",
    "number": "4ADD182440206",
    "type": "电气火灾监控警报器",
    "status": "离线",
    "address": "宾馆前台",
    "company_id": 1,
    "apparatustype_id": 2,
    "iot_card_number": "4543541",
    "transport_number": "46541651",
    "install_date": "2021-03-01 10:27:36",
    "lnglat": "104.146362,31.165137",
    "art": "119",
    "installation_person_name": "张三",
    "installation_person_phone": "123456789",
    "ps": "无"
}
```



**返回结果示例**

```
{
"code": 20000,
"message": ""
}
```



### **4. 删除设备**

**接口功能**

> 根据消防设备的id删除设备

###### URL

> /apparatus/apparatus/

**HTTP请求方式**

> DELETE

**请求参数**

> | 字段 | 是否必需 | 字段类型 | 说明         |
> | ---- | -------- | -------- | ------------ |
> | id   | 是       | int      | 消防设备的id |

**返回字段**

> | 返回字段 | 字段类型 | 说明                                                         |
> | -------- | -------- | ------------------------------------------------------------ |
> | code     | int      | 返回结果状态。20000：正常；其他：错误，错误原因详见message字段。 |
> | message  | string   | 错误原因                                                     |

**接口示例**

> BASEURL/apparatus/apparatus/
>

Request Body :

```
[
    {
     	"id":1
    },
    {
     	"id":2
    }
]
```



**返回结果示例**

```
{
    "code": 20000,
    "message": ""
}
```

