const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main().then((res)=>{
    console.log("Connected Successfully!")
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://localhost:27017/WanderLust");
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({ ...obj, owner: "67567f33e12daa214cc830d4"}));
    await Listing.insertMany( initData.data );
    console.log("DB was initialized")
}
initDB();