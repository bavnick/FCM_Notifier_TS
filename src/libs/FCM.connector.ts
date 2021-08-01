import {initializeApp, credential, app} from "firebase-admin";
export class FCMConnector{

    private static instance:FCMConnector;
    private _app:app.App;

    static getInstance():FCMConnector{
        if(FCMConnector.instance == null)
            FCMConnector.instance = new FCMConnector();
        return FCMConnector.instance;
    }

    constructor(){
        this._app = initializeApp({
            credential: credential.cert("./config/firebase.json"),
        }, "FCM Notifier");
    }

    public get app():app.App{
        return this._app;
    }
}