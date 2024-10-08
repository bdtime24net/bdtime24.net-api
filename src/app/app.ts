import express, { Application } from "express";
import middleware from "./middleware";
import routes from "./routes";
import YAML from "yamljs";
import swaggerUI from "swagger-ui-express";
import { errorHandler } from "./errors";
import { notFoundHandler } from "../errors/notFoundError";

const app: Application = express();
const doc = YAML.load(`${process.cwd()}/src/docs/swagger.yaml`);


app.use("/docs", swaggerUI.serve, swaggerUI.setup(doc));

middleware.forEach((mw) => app.use(mw));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/api", routes);


app.use(notFoundHandler);
app.use(errorHandler);


export default app;
