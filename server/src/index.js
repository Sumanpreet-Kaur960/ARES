const app = require("./app");
const connectDB = require("./database/db");

connectDB();

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});