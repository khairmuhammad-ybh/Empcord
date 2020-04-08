## Rest API Specs
---

#### Endpoint 1.0
GET
```
http:/<domain>:3002/blockdirs
```

Response specs
```js
const body = {
  status : boolean,
  blk_detail : {
    blk : "string",
    address : "string",
    postalcode : "String",
  },
  loc : "String",
  zone : "String",

}

```
