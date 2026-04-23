export type User = {
  id: string;
  name: string;
  email: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type Booking = {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  time: string;
};