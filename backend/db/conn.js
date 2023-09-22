const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://merseguel:hlhY2ZEI2jEQvig1@cluster0.kxwznso.mongodb.net/"
    );
    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
