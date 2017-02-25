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
}).then((respond)=>{
  respond.json().then((result)=>{
    //The result contains tags for the image
  })
}).catch((err)=>{
  throw err
})
```
