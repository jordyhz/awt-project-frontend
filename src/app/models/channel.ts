import { Book } from './book';
import { Message } from './message';
import { Video } from './video';

export interface Channel {
  _id?: String;
  title?: String;
  description?: String;
  creator?: String;
  joinedUsers: Users[];
  messages: Message[];
  books: Book[];
  videos: Video[];
  createdAt?: Date;
}

export interface Users {
  _id: String;
  firstName: String;
  lastName: String;
}
