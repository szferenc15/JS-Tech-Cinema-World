import { Ticket } from './../interfaces/screening.interface';
import { TicketService } from './../services/ticket.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-cinema-ticket-info',
  templateUrl: './cinema-ticket-info.component.html',
  styleUrls: ['./cinema-ticket-info.component.css']
})
export class CinemaTicketInfoComponent implements OnInit, OnDestroy {
  ticketInfoColumns = ['type', 'price'];
  ticketInfoDataSource: MatTableDataSource<Ticket> | null;

  ticketSubscription: Subscription;

  @ViewChild(MatSort) ticketInfoSort: MatSort;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketSubscription = this.ticketService.getTickets().subscribe((tickets: Ticket[]) => {
      this.ticketInfoDataSource = new MatTableDataSource<Ticket>(tickets);
      this.ticketInfoDataSource.sort = this.ticketInfoSort;
    })
  }

  ngOnDestroy() {
    this.ticketSubscription.unsubscribe();
  }
}
