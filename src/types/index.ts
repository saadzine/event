export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  capacity: number;
  registeredCount: number;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  capacity: number;
}