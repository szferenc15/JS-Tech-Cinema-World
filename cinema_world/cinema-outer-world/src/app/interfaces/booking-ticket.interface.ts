export interface Chair {
  row?: number;
  chair?: number;
}

export interface BookingTicket {
  _id?: number;
  screeningId?: number;
  username?: string;
  payment?: string;
  type?: string;
  row?: number;
  chair?: number;
}
