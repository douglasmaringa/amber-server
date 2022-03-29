const mongoose = require("mongoose");
const Schema = mongoose.Schema


let Name = new Schema({
    title:{type:String},
    first:{type:String}, 
    last:{type:String},
})

let Street = new Schema({
    number:{type:Number},
    name: {type:String}, 
})

let Coordinates = new Schema({
    latitude: {type:String},
    longitude: {type:String}
})

let Timezone = new Schema({
    offset: {type:String},
    description: {type:String}
})

let Location = new Schema({
    city:{type:String}, 
    state:{type:String}, 
    country: {type:String},
    postcode: {type:Number}, 
    timezone:Timezone,
    coordinates:Coordinates,
    street:Street

})

let Login = new Schema({
    uuid: {type:String},
    username: {type:String},
     password: {type:String},
      salt: {type:String}, 
      md5: {type:String}, 
      sha1: {type:String},
      sha256: {type:String}
})
let Dob = new Schema({
    date: {type:String},
    age:{type:Number}
})

let Registered = new Schema({
    date: {type:String}, 
    age: {type:Number}
})
let Id = new Schema({
    name: {type:String}, 
    value: {type:String}
})
let Picture = new Schema({
    large: {type:String},
    medium: {type:String},
    thumbnail: {type:String}
})
let Users = new Schema({
    gender:{type:String},
    name:Name,
    location:Location,
    email:{type:String},
    login:Login,
    dob:Dob,
    registered:Registered,
    phone: {type:String},
    cell: {type:String},
    id:Id,
    picture:Picture
})


module.exports = mongoose.model("Users",Users)