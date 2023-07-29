import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attribute";

export interface UserProps{
    id?:number;
    name?:string;
    age?:number
}

const rootUrl = `http://localhost:3000/users`
//function that returns nothing

export class User{
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attribute: Attributes<UserProps> 

    constructor(attrs:UserProps){
        this.attribute = new Attributes<UserProps>(attrs);
    }

    get on(){
        return this.events.on;
    }

    //implementing the get for trigger
    get trigger(){
        return this.events.trigger;
    }

    //implementing the get for trigger
    get get(){
        return this.attribute.get;
    }
     
}