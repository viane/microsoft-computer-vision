import app from './index';

const imageUrl = "https://www.smashingmagazine.com/wp-content/uploads/2016/01/07-responsive-image-example-castle-7-opt.jpg";

const contentType = "application/json";

app.getTagFromImage({"Ocp-Apim-Subscription-Key": "d3aa94c0d5c34fafb7b090079228ef33", "content-type": contentType, "url": imageUrl}).then((respond)=>{
  respond.json().then((result)=>{
    console.log(result);
  })
})
