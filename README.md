# microsoft-computer-vision

## Usage

### Requirements

- NPM
- Git Client

### Installation

```sh
npm install microsoft-computer-vision --save
```

### Test

```sh
npm test
```

### API

#### Tag-Image

```sh
getTagFromImage({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "content-type": "content type",
  "url": "image url"
}).then((result)=>{
  // the tags are now in the result     
}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```sh
getTagFromImage({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi"
}).then((result)=>{
  console.log(result);        # { tags:
                              #  [ { name: 'tree', confidence: 0.9994124174118042 },
                              #    { name: 'outdoor', confidence: 0.9984000325202942 },
                              #    { name: 'sky', confidence: 0.9974111914634705 },
                              #    { name: 'grass', confidence: 0.9564579725265503 },
                              #    { name: 'building', confidence: 0.9447041153907776 },
                              #    { name: 'castle', confidence: 0.6080892086029053 } ],
                              # requestId: 'eaafdbce-fa0f-4395-9aa3-f09a6d8e1a62',
                              # metadata: { width: 883, height: 589, format: 'Jpeg' } }
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```sh
// Suppose you want get tag for /tests/image/test.jpg
fs.readFile(appRoot + '/tests/image/test.jpg', function(err, data) {
    app.getTagFromImage({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {
        console.log(result);        # { tags:
                                    #  [ { name: 'tree', confidence: 0.9994124174118042 },
                                    #    { name: 'outdoor', confidence: 0.9984000325202942 },
                                    #    { name: 'sky', confidence: 0.9974111914634705 },
                                    #    { name: 'grass', confidence: 0.9564579725265503 },
                                    #    { name: 'building', confidence: 0.9447041153907776 },
                                    #    { name: 'castle', confidence: 0.6080892086029053 } ],
                                    # requestId: 'eaafdbce-fa0f-4395-9aa3-f09a6d8e1a62',
                                    # metadata: { width: 883, height: 589, format: 'Jpeg' } }
    }).catch((err)=>{
      throw err;
    })
});
```
