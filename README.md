# microsoft-computer-vision

## Usage

## Requirements

- NPM
- Git Client

## Installation

```sh
npm install microsoft-computer-vision --save
```

## API

### Analyze-Image

> options

```sh
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",
    "visual-features":"Categories,Tags,Description,Faces,ImageType,Color,Adult", # Can be at least one or more, separated by comma
    "details" : "Celebrities", # Optional
    "language" : "en" #or "cn", if not specified, library us "en" by default
    "content-type": "application/json",
    "url": "image_url"
          #or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```sh
getImageAnalysis({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "visual-features":"Tags, Faces, (...)",
  "content-type": "content type",
  "url": "image_url" #or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```sh
microsofComputerVision.getImageAnalysis({
  "Ocp-Apim-Subscription-Key": "A_Key",
  "content-type": "application/json",
  "url": "https://goo.gl/Hpz7gi",
  "visual-features":"Tags, Faces"
}).then((result) => {
     console.log(result);     # { tags:
                              #  [ { name: 'tree', confidence: 0.9994124174118042 },
                              #    { name: 'outdoor', confidence: 0.9984000325202942 },
                              #    { name: 'sky', confidence: 0.9974111914634705 },
                              #    { name: 'grass', confidence: 0.9564579725265503 },
                              #    { name: 'building', confidence: 0.9447041153907776 },
                              #    { name: 'castle', confidence: 0.6080892086029053 } ],
                              # requestId: 'c9c33a0d-7100-4cea-b37a-b93d2b3aff10',
                              # metadata: { width: 883, height: 589, format: 'Jpeg' },
                              # faces: [] }
}).catch((err)=>{
    throw err;
 })
```

> Example of passing image by binary

```sh
# Suppose you want get tag for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");
fs.readFile(appRoot + '/tests/image/test.jpg', function(err, data) {
    if (err)
        throw err;

    microsofComputerVision.getImageAnalysis({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "content-type": "application/octet-stream",
      "body": data,
      "visual-features":"Tags, Faces"
    }).then((result) => {
        console.log(result);     # { tags:
                                 #  [ { name: 'tree', confidence: 0.9994124174118042 },
                                 #    { name: 'outdoor', confidence: 0.9984000325202942 },
                                 #    { name: 'sky', confidence: 0.9974111914634705 },
                                 #    { name: 'grass', confidence: 0.9564579725265503 },
                                 #    { name: 'building', confidence: 0.9447041153907776 },
                                 #    { name: 'castle', confidence: 0.6080892086029053 } ],
                                 # requestId: 'c9c33a0d-7100-4cea-b37a-b93d2b3aff10',
                                 # metadata: { width: 883, height: 589, format: 'Jpeg' },
                                 # faces: [] }
    }).catch((err)=>{
      throw err;
    })
});
```

### Tag-Image

> Options

```sh
  {
    "Ocp-Apim-Subscription-Key": "your subscription key",

    "content-type": "application/json",
    "url": "image_url"
          #or
    "content-type": "application/octet-stream",
    "body": "image_binary"
  }
```

> Function call

```sh
getImageTag({
  "Ocp-Apim-Subscription-Key": "your subscription key",
  "content-type": "content type",
  "url": "image_url" #or "body": "image_binary"
}).then((result)=>{

  // the tags are now in the result

}).catch((err)=>{
  throw err;
})
```
> Example of passing image by URL

```sh
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.getImageTag({
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
# Suppose you want get tag for /tests/image/test.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile(appRoot + '/tests/image/test.jpg', function(err, data) {
    microsofComputerVision.getImageTag({
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
