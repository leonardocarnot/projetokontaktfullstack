export interface IUserRequest {
  name: string;
  email: string;
  telephone: string;
  isAdm: boolean;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
  isAdm: boolean;
  createdAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}
