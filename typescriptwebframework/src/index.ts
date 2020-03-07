import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection.models);
});

collection.on('error', () => {
  console.log('error');
});

collection.fetch();
