import { Ticket } from './../interfaces/screening.interface';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
  constructor(private http: Http) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get('http://localhost:3000/api/ticket/all').map((response: Response) => response.json());
  }
}
