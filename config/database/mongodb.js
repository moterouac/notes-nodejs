const mongoose = require('mongoose');
const fs = require('fs');

const connect = async () => {
    try {
      const url = process.env.MONGODB_URI;
      await mongoose.connect(url);
      console.log('MongoDB is connected');
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = { connect };