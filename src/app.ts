import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
//import mongoose from "mongoose";
import helmet from "helmet";
import logger from "morgan";
import path from "path"
import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '../.env') })
import schema from "./schema";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
      schema
    });
    this.middlewares();
  }
  //middlewares
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;
