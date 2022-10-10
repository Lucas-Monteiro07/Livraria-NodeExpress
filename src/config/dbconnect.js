import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Lucasmontesilva:EWW4DrlAG6q3CHOY@alura-livraria.3koipvy.mongodb.net/Livraria");

let db = mongoose.connection;

export default db;

