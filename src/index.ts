import { User } from './models/User';

const user = User.buildBuild({ id:1 });

user.on('save', () => {
  console.log(user);
});

user.fetch();

// main=>generics=>fetch=>settingTriggers=ShortenedMethod
