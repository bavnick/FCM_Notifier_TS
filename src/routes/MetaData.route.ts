import {Request, Response, Router} from "express";
import { FCMTokenManager } from "../libs/FCMTokenManager";
import { MetaData } from "../model/MetaData.model";

export const metaDataRouter = Router();

let storeFCMToken = (req:Request, res:Response):void => {
    try{
        let metaData = req.body as MetaData;
        FCMTokenManager.getInstance().addToken(metaData.userId, metaData.fcmToken);
        res.sendStatus(200);
    }catch(error){
        console.error(error);
        res.sendStatus(500);
    }
}

metaDataRouter.post("/api/v1/metaData", storeFCMToken);