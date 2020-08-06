export interface IClassDTO {
  subject: string;
  cost: number;
}

export interface IUserDTO {
  name: string;
  avatar: string;
  whatsApp: string;
  bio: string;
}

export interface IScheduleDTO {
  schedule: [
    {
      weekDay: number,
      from: string,
      to: string;
    }
  ];
}