import { Chair } from './booking-ticket.interface';
import { Ticket } from './../booking/ticket-payment-info/ticket-payment.database';

export interface Booking {
  _id?: number;
  tickets?: Chair[];
}
