import { Chair } from './booking-ticket.interface';

export interface Booking {
  _id?: number;
  tickets?: Chair[];
}
