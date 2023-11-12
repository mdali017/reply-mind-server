const connectDatabase = require("../config/db");
const { serverPort } = require("../secret");
const app = require("./src/app");

app.listen(serverPort, () => {
  console.log(`Server running on port: ${serverPort}`);
  connectDatabase();
});
