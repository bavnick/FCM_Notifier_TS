export interface NotificationMessage{
    userId:string,
    data:{
        [key: string]: string;
    },
    notification:{
        [key: string]: string;
    }
}