export interface IGetClassDTO {
  subject: string;
  cost: number;
  user: {
    id: string;
    name: string;
    avatar: string;
    whatsApp: string;
    bio: string;
  };
}