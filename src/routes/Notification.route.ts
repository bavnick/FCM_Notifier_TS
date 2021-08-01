import {Request, Response, Router} from "express";
import { FCMConnector } from "../libs/FCM.connector";
import { FCMTokenManager } from "../libs/FCMTokenManager";
import { NotificationMessage } from "../model/Notification.model";

export const notificationRouter = Router();

let sendNotification = (req:Request, res:Response):void => {
    try{
        let notificationMessage = req.body as NotificationMessage;
        let token =  FCMTokenManager.getInstance().getToken(notificationMessage.userId);
        if(token == undefined)
            return console.log("token is undefined");
        FCMConnector.getInstance().app.messaging().send({
            token: token,
            data: notificationMessage.data,
            notification: notificationMessage.notification  
        });
        res.sendStatus(200);
    }catch(error){
        console.error(error);
        res.sendStatus(500);
    }
}

notificationRouter.post("/api/v1/notification", sendNotification);