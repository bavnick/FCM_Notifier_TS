import express from "express";
import {metaDataRouter} from "./routes/MetaData.route";
import {notificationRouter} from "./routes/Notification.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(metaDataRouter);
app.use(notificationRouter);

app.listen("8080", () => {
    console.log("Application Started on port - 8080");
});