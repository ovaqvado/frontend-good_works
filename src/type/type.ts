export interface IUserData {
  username: string;
  email: string;
  password: string;
}

export interface IResponseUser {
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  username: string;
  password: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface IUser {
  username: string;
  id: number;
  email: string;
  token: string;
}
