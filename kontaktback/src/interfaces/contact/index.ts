export interface IContactRequest{
    userId: string;
    name: string;
    email: string;
    telephone: string;
  }

  export interface IContact{
    userId: string;
    name: string;
    email: string;
    telephone: string;
    createdAt: Date;
  }