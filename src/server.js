const connectDatabase = require("../config/db");
const app = require("./app");
const { serverPort } = require("../secret");

app.listen(serverPort, () => {
  console.log(`Server running on port: ${serverPort}`);
  connectDatabase();
});
