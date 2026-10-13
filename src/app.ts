import express, { Request, Response, Router } from "express"
import router from "./Routes/routes";
import { json } from "node:stream/consumers";

function createApp(){
    const app = express();

    app.use(express.json());

    app.use("/", router);

    return app;
}

export default createApp;



