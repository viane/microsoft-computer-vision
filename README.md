# microsoft-computer-vision

[![GitHub issues](https://img.shields.io/github/issues/viane/microsoft-computer-vision.svg)](https://github.com/viane/microsoft-computer-vision/issues)
&nbsp;&nbsp;[![GitHub license](https://img.shields.io/badge/build-pass-green.svg)](https://github.com/viane/microsoft-computer-vision/tree/master/tests)
&nbsp;&nbsp;[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/viane/microsoft-computer-vision/master/LICENSE)

</br>
### What does this library do?

Extract rich information from images to categorize and process visual data—and protect your users from unwanted content.

</br>

### Why I write it (why you might want to use it)?

When me and my friends tried to use computer vision in a hackthon, the data parsing is painful and there is only one outdated npm library serves but has lot issues. Since Microsoft's solution is a plain frontend javascript which does the job but hard to use in production, also poorly documented. So I decided to write up this library for anyone who wants straight forward to use Computer Vision API without tuning options and formatting data .

</br>

### Installation

```sh
npm install microsoft-computer-vision --save
```
</br>
### Feature

 - Promise based
 - Easy function calls
 - Use new end point of <b>westus.api.cognitive.microsoft.com/vision </b>instead of api.projectoxford.ai/vision

</br>

### API

#### Analyze-Image

</br>
Description

This operation extracts a rich set of visual features based on the image content.

Two input methods are supported -- (1) Uploading an image binray or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.

</br>

> Options

```javascript
{
    "Ocp-Apim-Subscription-Key": "your subscription key",
    "visual-features":"Categories,Tags,Description,Faces,ImageType,Color,Adult", // Can be at least one or more, separated by comma
    "details" : "Celebrities", // Optional
    "language" : "en" //or "cn", if not specified, library use "en" by default
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

</br>

#### Tag-Image

</br>
Description

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag “cello” may be accompanied by the hint “musical instrument”. All tags are in English.

Two input methods are supported -- (1) Uploading an image binary or (2) specifying an image URL.

</br>

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
tagImage({
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
microsofComputerVision.tagImage({
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
    microsofComputerVision.tagImage({
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

</br>

####Describe-Image

</br>
Description

This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.

Two input methods are supported -- (1) Uploading an image binary or (2) specifying an image URL.

</br>

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

</br>

####Image-Thumbnail

</br>
Description

This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image

A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.

</br>

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

</br>

####ORC-Image

</br>
Description

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.

Upon success, the OCR results will be returned.

Two input methods are supported -- (1) Uploading an image binary or (2) specifying an image URL.

</br>

> Options

```javascript
{
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "image_url",
    "language": "{language}", // Can be one of the following
                              // unk (AutoDetect)
                              // zh-Hans (ChineseSimplified)
                              // zh-Hant (ChineseTraditional)
                              // cs (Czech)
                              // da (Danish)
                              // nl (Dutch)
                              // en (English)
                              // fi (Finnish)
                              // fr (French)
                              // de (German)
                              // el (Greek)
                              // hu (Hungarian)
                              // it (Italian)
                              // Ja (Japanese)
                              // ko (Korean)
                              // nb (Norwegian)
                              // pl (Polish)
                              // pt (Portuguese,
                              // ru (Russian)
                              // es (Spanish)
                              // sv (Swedish)
                              // tr (Turkish)
    "detect-orientation": true // optional
  }
```

> Function call

```javascript
orcImage({
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "image_url",
    "language": "{language}",
    "detect-orientation": true
}).then((result)=>{
    // ORC are now in the result
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by URL

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.orcImage({
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "http://cdn.quotesgram.com/img/81/49/660235022-Random-Funny-Quotes-.jpg",
    "language": "en",
    "detect-orientation": true
}).then((result)=>{

  console.log(JSON.stringify(result));        // {
                              //     "language": "en",
                              //     "textAngle": 0,
                              //     "orientation": "Up",
                              //     "regions": [
                              //         {
                              //             "boundingBox": "7,55,605,387",
                              //             "lines": [
                              //                 {
                              //                     "boundingBox": "7,55,603,65",
                              //                     "words": [
                              //                         {
                              //                             "boundingBox": "7,59,291,61",
                              //                             "text": "HOME:"
                              //                         },
                              //                         {
                              //                             "boundingBox": "326,55,284,65",
                              //                             "text": "Where"
                              //                         }
                              //                     ]
                              //                 },
                              //                 ...
                              //             ]
                              //         }
                              //     ]
                              // }
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```javascript
// Suppose you want get ORC analysis for /tests/image/orcTest.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile('/tests/image/orcTest.jpg', function(err, data) {
    microsofComputerVision.imageThumbnail({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "language": "en",
      "detect-orientation": true,
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {
      console.log(JSON.stringify(result));        // {
                                  //     "language": "en",
                                  //     "textAngle": 0,
                                  //     "orientation": "Up",
                                  //     "regions": [
                                  //         {
                                  //             "boundingBox": "7,55,605,387",
                                  //             "lines": [
                                  //                 {
                                  //                     "boundingBox": "7,55,603,65",
                                  //                     "words": [
                                  //                         {
                                  //                             "boundingBox": "7,59,291,61",
                                  //                             "text": "HOME:"
                                  //                         },
                                  //                         {
                                  //                             "boundingBox": "326,55,284,65",
                                  //                             "text": "Where"
                                  //                         }
                                  //                     ]
                                  //                 },
                                  //                 ...
                                  //             ]
                                  //         }
                                  //     ]
                                  // }
  }
    }).catch((err)=>{
      throw err;
    })
});
```

</br>

####List Domain Specific Models

</br>
Description

TThis operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API only supports one domain-specific model: a celebrity recognizer.

</br>

> Options

```javascript
  {
    "Ocp-Apim-Subscription-Key": "A_Key"
  }
```

> Function call

```javascript
recognizeDomainSpecificContent({
    "Ocp-Apim-Subscription-Key": "A_Key"
}).then((result)=>{
    // Domain content are now in the result
}).catch((err)=>{
  throw err;
})
```

> Example of getting List Domain Specific Models

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.listDomainSpecificModels({
    "Ocp-Apim-Subscription-Key": "A_Key"
}).then((result)=>{

  console.log(JSON.stringify(result));        // {
                                              //   "models": [
                                              //       {
                                              //           "name": "celebrities",
                                              //           "categories": [
                                              //               "people_"
                                              //           ]
                                              //       }
                                              //   ],
                                              //   "requestId": "980399d9-c520-49b6-bf29-bbe30aae515e"
                                              // }
}).catch((err)=>{
  throw err;
})
```

</br>

####Recognize Domain Specific Content

</br>
Description

This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API only provides a single domain-specific model: celebrities.

Two input methods are supported -- (1) Uploading an image binary or (2) specifying an image URL.

</br>

> Options

```javascript
{
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "image_url",
    "model": "{model}" // use listDomainSpecificModels() to get current available models
  }
```

> Function call

```javascript
recognizeDomainSpecificContent({
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "image_url",
    "model": "{model}"
}).then((result)=>{
    // Domain content are now in the result
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by URL

```javascript
const microsofComputerVision = require("microsoft-computer-vision");
microsofComputerVision.recognizeDomainSpecificContent({
    "Ocp-Apim-Subscription-Key": "A_Key",
    "content-type": "application/json",
    "url": "http://d.ibtimes.co.uk/en/full/377533/bill-gates.jpg",
    "model": "celebrities"
}).then((result)=>{

  console.log(JSON.stringify(result));      //   {
                                            //     "requestId": "055c5645-3ec0-4dc9-9da8-98d62a28a7c2",
                                            //     "metadata": {
                                            //         "width": 620,
                                            //         "height": 414,
                                            //         "format": "Jpeg"
                                            //     },
                                            //     "result": {
                                            //         "celebrities": [
                                            //             {
                                            //                 "name": "Bill Gates",
                                            //                 "faceRectangle": {
                                            //                     "left": 184,
                                            //                     "top": 80,
                                            //                     "width": 153,
                                            //                     "height": 153
                                            //                 },
                                            //                 "confidence": 0.9999932
                                            //             }
                                            //         ]
                                            //     }
                                            // }
}).catch((err)=>{
  throw err;
})
```

> Example of passing image by binary

```javascript
// Suppose you want get model in /tests/image/RDSCTest.jpg

const microsofComputerVision = require("microsoft-computer-vision");

fs.readFile('/tests/image/RDSCTest.jpg', function(err, data) {
    microsofComputerVision.imageThumbnail({
      "Ocp-Apim-Subscription-Key": "A_Key",
      "model": "celebrities",
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {
      console.log(JSON.stringify(result));      //   {
                                                //     "requestId": "055c5645-3ec0-4dc9-9da8-98d62a28a7c2",
                                                //     "metadata": {
                                                //         "width": 620,
                                                //         "height": 414,
                                                //         "format": "Jpeg"
                                                //     },
                                                //     "result": {
                                                //         "celebrities": [
                                                //             {
                                                //                 "name": "Bill Gates",
                                                //                 "faceRectangle": {
                                                //                     "left": 184,
                                                //                     "top": 80,
                                                //                     "width": 153,
                                                //                     "height": 153
                                                //                 },
                                                //                 "confidence": 0.9999932
                                                //             }
                                                //         ]
                                                //     }
                                                // }
  }
    }).catch((err)=>{
      throw err;
    })
});
```
