# microsoft-computer-vision

## Usage

## Requirements

- NPM
- Git Client

## Installation

```javascript
npm install microsoft-computer-vision --save
```

## API

### Analyze-Image

> Options

```javascript
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",
    "visual-features":"Categories,Tags,Description,Faces,ImageType,Color,Adult", // Can be at least one or more, separated by comma
    "details" : "Celebrities", // Optional
    "language" : "en" //or "cn", if not specified, library us "en" by default
    "content-type": "application/json",
    "url": "image_url"
          //or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```javascript
getImageAnalysis({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "visual-features":"Tags, Faces, (...)",
  "content-type": "content type",
  "url": "image_url" //or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```javascript
microsofComputerVision.getImageAnalysis({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi",
  "visual-features":"Tags, Faces"
}).then((result) => {
     console.log(result);     // { tags:
                              //  [ { name: 'tree', confidence: 0.9994124174118042 },
                              //    { name: 'outdoor', confidence: 0.9984000325202942 },
                              //    { name: 'sky', confidence: 0.9974111914634705 },
                              //    { name: 'grass', confidence: 0.9564579725265503 },
                              //    { name: 'building', confidence: 0.9447041153907776 },
                              //    { name: 'castle', confidence: 0.6080892086029053 } ],
                              // requestId: 'c9c33a0d-7100-4cea-b37a-b93d2b3aff10',
                              // metadata: { width: 883, height: 589, format: 'Jpeg' },
                              // faces: [] }
}).catch((err)=>{
    throw err;
 })
```

> Example of passing image by binary

```javascript
// Suppose you want get tag and face for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");
fs.readFile('/tests/image/test.jpg', function(err, data) {
    if (err)
        throw err;

    microsofComputerVision.getImageAnalysis({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "content-type": "application/octet-stream",
      "body": data,
      "visual-features":"Tags, Faces"
    }).then((result) => {
        console.log(result);     
                                 // { tags:
                                 //  [ { name: 'tree', confidence: 0.9994124174118042 },
                                 //    { name: 'outdoor', confidence: 0.9984000325202942 },
                                 //    { name: 'sky', confidence: 0.9974111914634705 },
                                 //    { name: 'grass', confidence: 0.9564579725265503 },
                                 //    { name: 'building', confidence: 0.9447041153907776 },
                                 //    { name: 'castle', confidence: 0.6080892086029053 } ],
                                 // requestId: 'c9c33a0d-7100-4cea-b37a-b93d2b3aff10',
                                 // metadata: { width: 883, height: 589, format: 'Jpeg' },
                                 // faces: [] }
    }).catch((err)=>{
      throw err;
    })
});
```

### Tag-Image

> Options

```javascript
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",

    "content-type": "application/json",
    "url": "image_url"
          //or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```javascript
getImageTag({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "content-type": "content type",
  "url": "image_url" //or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.getImageTag({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi"
}).then((result)=>{
  console.log(result);        // { tags:
                              //  [ { name: 'tree', confidence: 0.9994124174118042 },
                              //    { name: 'outdoor', confidence: 0.9984000325202942 },
                              //    { name: 'sky', confidence: 0.9974111914634705 },
                              //    { name: 'grass', confidence: 0.9564579725265503 },
                              //    { name: 'building', confidence: 0.9447041153907776 },
                              //    { name: 'castle', confidence: 0.6080892086029053 } ],
                              // requestId: 'eaafdbce-fa0f-4395-9aa3-f09a6d8e1a62',
                              // metadata: { width: 883, height: 589, format: 'Jpeg' } }
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```javascript
// Suppose you want get tag for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile('/tests/image/test.jpg', function(err, data) {
    microsofComputerVision.getImageTag({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {

        console.log(result);        // { tags:
                                    //  [ { name: 'tree', confidence: 0.9994124174118042 },
                                    //    { name: 'outdoor', confidence: 0.9984000325202942 },
                                    //    { name: 'sky', confidence: 0.9974111914634705 },
                                    //    { name: 'grass', confidence: 0.9564579725265503 },
                                    //    { name: 'building', confidence: 0.9447041153907776 },
                                    //    { name: 'castle', confidence: 0.6080892086029053 } ],
                                    // requestId: 'eaafdbce-fa0f-4395-9aa3-f09a6d8e1a62',
                                    // metadata: { width: 883, height: 589, format: 'Jpeg' } }
    }).catch((err)=>{
      throw err;
    })
});
```

### Describe-Image

> Options

```javascript
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",
    "max-candidates":"1", // if not specified, library use 1 by default
    "content-type": "application/json",
    "url": "image_url"
          //or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```javascript
describeImage({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "max-candidates":"1",
  "content-type": "content type",
  "url": "image_url" //or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.describeImage({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "max-candidates":"1",
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi"
}).then((result)=>{
  console.log(result);      // {
                            // "description": {
                            //     "tags": [
                            //         "outdoor",
                            //         "grass",
                            //         "building",
                            //         "large",
                            //         "front",
                            //          ...
                            //     ],
                            //     "captions": [
                            //         {
                            //             "text": "a castle with a clock tower in front of a building",
                            //             "confidence": 0.5546771291117777
                            //         },
                            //         {
                            //             "text": "a castle with a clock tower",
                            //             "confidence": 0.5470764456423322
                            //         }
                            //     ]
                            // },
                            // "requestId": "b8ded71f-d515-41d4-9ac2-39372c41b3d8",
                            // "metadata": {
                            //     "width": 883,
                            //     "height": 589,
                            //     "format": "Jpeg"
                            // }
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```javascript
// Suppose you want get description for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile('/tests/image/test.jpg', function(err, data) {
    microsofComputerVision.describeImage({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "max-candidates":"1",
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {
        console.log(result);      // {
                                  // "description": {
                                  //     "tags": [
                                  //         "outdoor",
                                  //         "grass",
                                  //         "building",
                                  //         "large",
                                  //         "front",
                                  //          ...
                                  //     ],
                                  //     "captions": [
                                  //         {
                                  //             "text": "a castle with a clock tower in front of a building",
                                  //             "confidence": 0.5546771291117777
                                  //         },
                                  //         {
                                  //             "text": "a castle with a clock tower",
                                  //             "confidence": 0.5470764456423322
                                  //         }
                                  //     ]
                                  // },
                                  // "requestId": "b8ded71f-d515-41d4-9ac2-39372c41b3d8",
                                  // "metadata": {
                                  //     "width": 883,
                                  //     "height": 589,
                                  //     "format": "Jpeg"
                                  // }
  }
    }).catch((err)=>{
      throw err;
    })
});
```

### Image-Thumbnail

> Options

```javascript
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",
    "width": "100",
    "height": "100",
    "smart-cropping": true // optional
    "content-type": "application/json",
    "url": "image_url"
          //or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```javascript
imageThumbnail({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "width": "100",
  "height": "100",
  "smart-cropping": true
  "content-type": "content type",
  "url": "image_url" //or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.imageThumbnail({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "width": "100",
  "height": "100",
  "smart-cropping": true
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi"
}).then((thumbnailBinary)=>{
    // Do something to the binary
    fs.writeFile('/thumbnail.jpg', thumbnailBinary, 'binary', function(err) {
        if (err)
            throw err
    })
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```javascript
// Suppose you want get a 100x100 thumbnail for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile('/tests/image/test.jpg', function(err, data) {
    microsofComputerVision.imageThumbnail({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "width": "100",
      "height": "100",
      "smart-cropping": true
      "content-type": "application/octet-stream",
      "body": data
    }).then((thumbnailBinary) => {
      // Do something to the binary
      fs.writeFile('/thumbnail.jpg', thumbnailBinary, 'binary', function(err) {
          if (err)
              throw err
      })
  }
    }).catch((err)=>{
      throw err;
    })
});
```
