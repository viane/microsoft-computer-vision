const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fs = require('fs');

import microsofComputerVision from 'index'

chai.use(chaiAsPromised)
chai.use(require('chai-fs'))
const expect = chai.expect
const assert = chai.assert
const myKey = "37f3c887843340279cbddb048b43d3b8"

describe('#tagImage()', () => {
  it('Should return an array of tags by image URI', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": contentType, "url": imageUrl, "request-origin": "eastus2"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image binary', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/image/test.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": contentType, "url": data, "request-origin": "eastus2"})

      return expect(result).to.eventually.have.property("tags")
    })

  })

})

describe('#analyzeImage()', () => {
  it('Should return an array of faces by image URI', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"

    const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "visual-features": "faces", "request-origin": "eastus2"})

    return expect(result).to.eventually.have.property("faces")
  })

  it('Should return an array of faces by image binary', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/image/test.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.analyzeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "visual-features": "Faces", "request-origin": "eastus2"})

      return expect(result).to.eventually.have.property("faces")
    })

  })

})

describe('#describeImage()', () => {
  it('Should return a description of image URI', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"

    const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": imageUrl, "max-candidates": "2", "request-origin": "eastus2"})

    return expect(result).to.eventually.have.property("description")
  })

  it('Should return a description of image binary', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/image/test.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.describeImage({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "max-candidates": "2", "request-origin": "eastus2"})

      return expect(result).to.eventually.have.property("description")
    })

  })

})

describe('#imageThumbnail()', () => {
  it('Should write the thumbnail of image URI to /tests/image/thumbnail.jpg', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"

    const result = microsofComputerVision.imageThumbnail({
      "Ocp-Apim-Subscription-Key": myKey,
      "content-type": "application/json",
      "url": imageUrl,
      "width": "100",
      "height": "100",
      "smart-cropping": true,
      "request-origin": "eastus2"
    })
    return expect(result).to.not.eventually.have.property("code")

  })

  it('Should write the thumbnail of image binary to /tests/image/thumbnail.jpg', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/image/test.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.imageThumbnail({
        "Ocp-Apim-Subscription-Key": myKey,
        "content-type": "application/octet-stream",
        "body": data,
        "width": "100",
        "height": "100",
        "smart-cropping": true,
        "request-origin": "eastus2"
      })

      return expect(result).to.not.eventually.have.property("code")
    })
  })
})

describe('#orcImage()', () => {
  it('Should return the Optical Character Recognition of image URI', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"

    const result = microsofComputerVision.orcImage({
      "Ocp-Apim-Subscription-Key": myKey,
      "content-type": "application/json",
      "url": "http://cdn.quotesgram.com/img/81/49/660235022-Random-Funny-Quotes-.jpg",
      "language": "en",
      "detect-orientation": true,
      "request-origin": "eastus2"
    })
    return expect(result).to.eventually.have.property("regions")

  })

  it('Should return the Optical Character Recognition of image binary', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/tests/image/orcTest.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.orcImage({
        "Ocp-Apim-Subscription-Key": myKey,
        "content-type": "application/octet-stream",
        "body": data,
        "language": "en",
        "detect-orientation": true,
        "request-origin": "eastus2"
      })

      return expect(result).to.eventually.have.property("regions")
    })
  })
})

describe('#listDomainSpecificModels()', () => {
  it('Should return the available models', function() {

    const result = microsofComputerVision.listDomainSpecificModels({"Ocp-Apim-Subscription-Key": myKey, "request-origin": "eastus2"})

    return expect(result).to.eventually.have.deep.property("models")

  })
})

describe('#recognizeDomainSpecificContent()', () => {
  it('Should return the Optical Character Recognition of image URI', function() {

    const result = microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/json", "url": "http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg", "model": "celebrities", "request-origin": "eastus2"})
    return expect(result).to.eventually.have.deep.property("result.celebrities")
  })

  it('Should return the Optical Character Recognition of image binary', function() {

    const fs = require('fs')
    const contentType = "application/octet-stream"
    return fs.readFile('/tests/image/RDSCTest.jpg', function(err, data) {
      if (err) {
        throw err
      }

      const result = microsofComputerVision.recognizeDomainSpecificContent({"Ocp-Apim-Subscription-Key": myKey, "content-type": "application/octet-stream", "body": data, "model": "celebrities", "request-origin": "eastus2"})
      return expect(result).to.eventually.have.deep.property("result.celebrities")
    })
  })
})

describe('New region availibility test', () => {
  it('Should return an array of tags by image URI from South Central US', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "70d0aa1eeb534f8db59cd21e50bd4a39", "content-type": contentType, "url": imageUrl, "request-origin": "southcentralus"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from UK South', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "99a3d031756845369d0a932062c7821d", "content-type": contentType, "url": imageUrl, "request-origin": "uksouth"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from Japan East', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "2ffbf786327b4617871b8b47d91db5f5", "content-type": contentType, "url": imageUrl, "request-origin": "japaneast"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from Australia East', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "b692b756be364ea8a36415641c43dbac", "content-type": contentType, "url": imageUrl, "request-origin": "australiaeast"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from Brazil South', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "c0f2c29792924911b84b892f92b7d9be", "content-type": contentType, "url": imageUrl, "request-origin": "brazilsouth"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from Central India', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "a2b2abcd8f75444c8c5395ab508c0fdc", "content-type": contentType, "url": imageUrl, "request-origin": "centralindia"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from East Asia', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "d8ab9e54389845ec8343c1a03e6cb293", "content-type": contentType, "url": imageUrl, "request-origin": "eastasia"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from North Europe', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "bb10223f26c1470aa832434f792ac7f4", "content-type": contentType, "url": imageUrl, "request-origin": "northeurope"})

    return expect(result).to.eventually.have.property("tags")
  })

  it('Should return an array of tags by image URI from West Europe', function() {

    const imageUrl = "https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3-thumbnail.jpg"
    const contentType = "application/json"

    const result = microsofComputerVision.tagImage({"Ocp-Apim-Subscription-Key": "52d492cee3b045c78bee0c29aa2f996d", "content-type": contentType, "url": imageUrl, "request-origin": "westeurope"})

    return expect(result).to.eventually.have.property("tags")
  })
})
