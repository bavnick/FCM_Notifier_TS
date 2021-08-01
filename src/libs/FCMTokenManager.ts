export class FCMTokenManager{

    private connections:Map<string,string>;

    private static instance:FCMTokenManager;

    constructor(){
        this.connections = new Map<string,string>();
    }

    static getInstance():FCMTokenManager{
        if(FCMTokenManager.instance == null)
            FCMTokenManager.instance = new FCMTokenManager();
        return FCMTokenManager.instance;
    }

    addToken(userId:string, fcmToken:string): void{
        this.connections.set(userId, fcmToken);
    }

    getToken(userId:string):string | undefined{
        return this.connections.get(userId);
    }

}