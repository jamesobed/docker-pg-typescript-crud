import express, { Application } from "express";
import { json } from "body-parser";
import morgan from "morgan";
import userRoutes from "./routes/users.routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(json());
    this.app.use(morgan("dev"));
  }

  private routes(): void {
    this.app.use("/api/users", userRoutes);
  }
}

export default new App().app;
