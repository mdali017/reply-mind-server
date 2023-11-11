require("dotenv").config();

const serverPort = process.env.SERVER_PORT;
const mongodbURL = process.env.MONGODB_URL;
// console.log(5, process.env.MONGODB_ATLAS_URL);

module.exports = { serverPort, mongodbURL };
