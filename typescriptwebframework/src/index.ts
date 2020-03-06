import { User } from './models/User';

const user = new User({ name: 'Carlos Cachoeira', age: 74 });
user.on('save', () => console.log(user));
user.save();
