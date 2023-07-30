import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";

export interface UserProps{
    id:number;
    name?:string;
    age?:number
}

const rootUrl = `http://localhost:3000/users`
//function that returns nothing

export class User{
    public events: Eventing = new Eventing();
    public sync: ApiSync<UserProps> = new ApiSync<UserProps>(rootUrl);
    constructor(private data: UserProps){}


   
    
}