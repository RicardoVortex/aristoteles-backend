import express, { Router } from "express";
import cors from "cors";
import path from "path";

import corsAppConfig from "./config/cors.config";

import { ErrorHandler } from "./presentation/middlewares/error.handler";

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

export class Server {
  private readonly app = express();

  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = "public" } = options;

    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  async start() {
    this.middlewares();

    this.logErrors();

    this.app.get("*", (_, res) => {
      const indexPath = path.join(
        __dirname + `../../../${this.publicPath}/index.html`
      );

      res.sendFile(indexPath);
    });

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.static(this.publicPath));

    this.app.use(cors(corsAppConfig));

    this.app.use("/api/v1", this.routes);
  }

  logErrors() {
    this.app.use(ErrorHandler.logErrors);
    this.app.use(ErrorHandler.ormErrorHandler);
    this.app.use(ErrorHandler.customErrorHandler);
    this.app.use(ErrorHandler.errorHandler);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);
    });
  }
}

export default Server;
