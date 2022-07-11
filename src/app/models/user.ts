export interface User {
  _id?: String;
  email: String;
  password: String;
  firstName: String;
  lastName: String;
  joinedRooms: id[];
}

export interface id {
  _id: String;
}
