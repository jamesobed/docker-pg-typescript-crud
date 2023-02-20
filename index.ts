import dotenv from "dotenv";
import app from "./src/app";
import sequelize from "./src/database";

dotenv.config();
const port = process.env.PORT || 3090;

sequelize.sync({ 
  // force: true 
}).then(() => {
  app.listen(port, () => {
    // console.clear();
    console.log(`Server running on port ${port}`);
  });
});
