import { User } from "./models/User";

const user = new User({ name:'makes', age:30})

user.on('change', ()=>{
    console.log('Change 1')
})
user.on('change',()=>{
    console.log('Change 2')
})
user.on('tehrue',()=>{
    console.log('Change 3')
})

user.trigger('change')
