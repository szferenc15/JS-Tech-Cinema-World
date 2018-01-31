import { AuthenticationService } from './authentication.service';
import { Booking } from './../interfaces/booking.interface';
import { RoomDimension } from './../interfaces/room.interface';
import { Chair } from './../interfaces/booking-ticket.interface';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { Screening, Ticket } from './../interfaces/screening.interface';
import { Cinema } from './../interfaces/cinema.interface';
import { Film } from './../interfaces/film.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {
	screeningsOfSelectedCinema: Subject<Screening[]> = new Subject<Screening[]>();
	ticketsOfSelectedScreening: Subject<Ticket[]> = new Subject<Ticket[]>();
	selectedFilmName: Subject<string> = new Subject<string>();
	ageLimit: Subject<number> = new Subject<number>();
	selectedCinemaName: Subject<string> = new Subject<string>();
	selectedScreening: Subject<Screening> = new Subject<Screening>();
	selectedTicketsCount: Subject<number> = new Subject<number>();
	selectedScreeningId: Subject<number> = new Subject<number>();
	roomDimension: Subject<RoomDimension> = new Subject<RoomDimension>();
	bookingsOnSelectedScreening: Subject<Booking[]> = new Subject<Booking[]>();
	selectedTickets: Ticket[] = [];
	selectedFilmTitle: string = '';
	selectedPaymentMethodName: string = '';
	amenitiesChargeOfSelectedCinema: number = 0;
	isFromFilmInfoSubject: Subject<boolean> = new Subject<boolean>();
	isFromFilmInfo: boolean = false;

	constructor(private http: Http) {}

	getAgeLimit() {
		return this.ageLimit;
	}

	getAmenitiesChargeOfSelectedCinema() {
		return this.amenitiesChargeOfSelectedCinema;
	}

	getSelectedFilmName() {
		return this.selectedFilmName;
	}

	getSelectedFilmTitle() {
		return this.selectedFilmTitle;
	}

	getSelectedCinemaName() {
		return this.selectedCinemaName;
	}

	getScreeningsOfSelectedCinema() {
		return this.screeningsOfSelectedCinema;
	}

	getTicketsOfSelectedScreening() {
		return this.ticketsOfSelectedScreening;
	}

	getSelectedScreeningId() {
		return this.selectedScreeningId;
	}

	getSelectedScreening() {
		return this.selectedScreening;
	}

	getBookingsOnSelectedScreening() {
		return this.bookingsOnSelectedScreening;
	}

	getSelectedTickets() {
		return this.selectedTickets.slice();
	}

	getSelectedTicketsCount() {
		return this.selectedTicketsCount;
	}

	getRoomDimension() {
		return this.roomDimension;
	}

	setZeroStageInfoOfBooking(film: Film) {
		this.selectedFilmName.next(film.title);
		this.selectedFilmTitle = film.title;
		this.ageLimit.next(film.ageLimit);
	}

	setFirstStageInfoOfBooking(cinema: Cinema) {
		this.selectedCinemaName.next(cinema.name);
		this.amenitiesChargeOfSelectedCinema = cinema.amenitiesCharge;

		let selectedCinemaData = {
			id: cinema._id,
			filmTitle: this.selectedFilmTitle
		};

		let screeningsOfCinema = this.http
			.post('http://localhost:3000/api/screening/cinema/film', selectedCinemaData)
			.toPromise();

		screeningsOfCinema
			.then((response: Response) => {
				return response.json();
			})
			.then((response) => {
				this.screeningsOfSelectedCinema.next(response);
			});
	}

	setSecondStageInfoOfBooking(screening: Screening) {
		this.selectedScreening.next(screening);
		this.selectedScreeningId.next(screening._id);

    let roomIdOfScreening = {
			_id: screening.roomId
		};

		let roomOfScreening = this.http
			.post('http://localhost:3000/api/room/roomOfScreening', roomIdOfScreening)
			.toPromise();

		roomOfScreening
			.then((response: Response) => {
				return response.json();
			})
			.then((response) => {
				this.roomDimension.next({ row: response.row, seatNumber: response.seatNumber });

        let selectedScreeningId = {
          _id: screening._id
        };

				let availableTicketsOfScreening = this.http
					.post('http://localhost:3000/api/screeningTicket/getTickets', selectedScreeningId)
					.toPromise();

				availableTicketsOfScreening
					.then((response: Response) => {
						return response.json();
					})
					.then((response) => {

            let ticketTypes = [];
            for (let i = 0; i < response.length; i++) {
              ticketTypes.push({type: response[i].type});
            }

            let ticketInformation = this.http
							.post('http://localhost:3000/api/ticket/getTicketInformation', ticketTypes)
							.toPromise();

            ticketInformation
							.then((response: Response) => {
								return response.json();
							})
							.then((response) => {

                this.ticketsOfSelectedScreening.next(response);

                let bookingsOfScreening = this.http
                  .post('http://localhost:3000/api/booking/bookingsOfScreening', selectedScreeningId)
                  .toPromise();

                bookingsOfScreening
                  .then((response: Response) => {
                    return response.json();
                  })
                  .then((response) => {
                    this.bookingsOnSelectedScreening.next(response);
                  });

					    });
				  });
			});
	}

	setThirdStageInfoOfBooking(selectedTickets: Ticket[], paymentMethodName: string) {
		this.selectedTickets = selectedTickets;
		this.selectedTicketsCount.next(this.selectedTickets.length);
		this.selectedPaymentMethodName = paymentMethodName;
	}

	getIsFromFilmInfo() {
		return this.isFromFilmInfoSubject;
	}

	getIsFromFilmInfoConstant() {
		return this.isFromFilmInfo;
	}

	seIsFromFilmInfoConstant(isFromFilmInfo: boolean) {
		this.isFromFilmInfo = isFromFilmInfo;
	}

	setIsFromFilmInfo(isFrom: boolean) {
		this.isFromFilmInfoSubject.next(isFrom);
		this.isFromFilmInfo = isFrom;
	}

	saveBookingInDatabase(selectedChairs: Chair[], screeningId: number) {
		let bookingTypes = [];
		for (let i = 0; i < this.selectedTickets.length; i++) {
			bookingTypes.push({
				type: this.selectedTickets[i].type,
				row: selectedChairs[i].row.toString(),
				chair: selectedChairs[i].chair.toString()
			});
		}

		let newBooking = {
			screeningId: screeningId,
			username: JSON.parse(sessionStorage.getItem('user')).username,
			paymentMethod: this.selectedPaymentMethodName,
			bookings: bookingTypes
		};

		let bookingPromise = this.http.put('http://localhost:3000/api/booking/new_booking', newBooking).toPromise();
	}
}
