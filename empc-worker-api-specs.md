

![Logo](/Users/hanafiyakub/Desktop/Dev PROJECTS/Empcord/Logo.jpg)

# Rest API for Worker empc-worker REST API specification document



This documentation describe all specs of its REST endpoints, Consumption and Response datas I/O for mobile Client usages.





### The Rest API : '/workers/setting-info'

#### method : GET

#### Description : 

This endpoint is to get the account user information for the settings update,

#### Authentication

* Type : **Bearer**

* Token : **JWT**

 

#### Resp

```json
{
	"_id" : "string",
  "_email" : "string",
  "userName" : "string",
  "roles" : ['String'],
  "rights" : ['String'],
  "status" : "string",
  "firstName" : "string",
  "lastName" : "string",
  "createdDt" : "string",
  "mobileNumber" : "string",
  "zone" : "string",
  "officerName" : "string"
}
```



 







