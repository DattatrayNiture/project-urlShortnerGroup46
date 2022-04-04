const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({

  // { urlCode: { mandatory, unique, lowercase, trim }, longUrl: {mandatory, valid url},
  //  shortUrl: {mandatory, unique} }
   urlCode:{ type:String, required:true, unique:true, lowercase:true, trim:true},
   longUrl:{type:String, required:true, trim:true, unique:true,},
   shortUrl:{type:String, required:true, unique:true}  

})

module.exports = mongoose.model("UrlShortner", urlSchema)