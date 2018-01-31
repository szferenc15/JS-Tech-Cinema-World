import { PaymentMethod } from './../../interfaces/payment-method.interface';
import { Subscription } from 'rxjs/Subscription';
import { BookingService } from './../../services/booking.service';
import { Ticket } from './../../interfaces/screening.interface';
import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ticket-payment-info',
  templateUrl: './ticket-payment-info.component.html',
  styleUrls: ['./ticket-payment-info.component.css']
})
export class TicketPaymentInfoComponent implements OnInit, OnDestroy {

  @ViewChildren('tickets') tickets;

  availableTickets: Ticket[] = [];
  amenitiesCharge: number = null;
  isNextBtnDisabled = true;

  ticketSubscription: Subscription;

  paymentMethods: PaymentMethod[] = [
    {name: 'Foglalas', picture: '../../../assets/booking.png'},
    {name: 'PayPal', picture: '../../../assets/paypal.png'},
    {name: 'MasterCard', picture: '../../../assets/master_card.png'},
    {name: 'Maestro', picture: '../../../assets/maestro.png'},
    {name: 'VISA', picture: '../../../assets/visa.png'},
    {name: 'WESTERN UNION', picture: '../../../assets/western_union.jpg'},
    {name: 'SWITCH', picture: '../../../assets/switch.png'},
    {name: 'DELTA', picture: '../../../assets/delta.png'},
    {name: 'Cirrus', picture: '../../../assets/cirrus.png'}
  ];

  selectedPaymentMethod: PaymentMethod = {};
  selectedTickets: Ticket[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.ticketSubscription = this.bookingService.getTicketsOfSelectedScreening().subscribe((availableTickets: Ticket[]) => {
      this.availableTickets = availableTickets;
      this.amenitiesCharge = this.bookingService.getAmenitiesChargeOfSelectedCinema();
    })
  }

  ngOnDestroy() {
    this.ticketSubscription.unsubscribe();
  }

  setSelectedPaymentMethod(paymentMethod) {
    this.selectedPaymentMethod = paymentMethod;
    this.checkTicketCount();
  }

  checkTicketCount() {
    let ticketResults = this.tickets['_results'].filter((option) => {
      return option.selected != null && option.selected.value != 0;
    });

    if (ticketResults.length > 0 && this.selectedPaymentMethod.name != null) {
      this.isNextBtnDisabled = false;
    } else {
      this.isNextBtnDisabled = true;
    }
  }

  setThirdStageInfoOfBooking() {
    let ticketResults = this.tickets['_results'].filter((option) => {
      return option.selected != null && option.selected.value != 0;
    });

    for (let i = 0; i < ticketResults.length; i++) {
      let actualTicketCount = ticketResults[i].selected.value;
      let actualTicketType =  this.availableTickets[i].type;
      let actualTicketPrice =  this.availableTickets[i].price;
      for (let j = 0; j < actualTicketCount; j++) {
        this.selectedTickets.push({type: actualTicketType, price: actualTicketPrice});
      }
    }

    this.bookingService.setThirdStageInfoOfBooking(this.selectedTickets, this.selectedPaymentMethod.name);
  }
}
