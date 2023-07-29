import { User } from "./models/User";

const user = new User({ id:1 });

// user.set({ name: 'Mike', age:200 });

user.events.on('change',()=>{
    console.log('change');
})