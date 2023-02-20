import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "testmr",
  dialect: "postgres",
  username: "sir_obed",
  password: "1234",
  // modelPaths: [__dirname + "/models"],
});

export default sequelize;
