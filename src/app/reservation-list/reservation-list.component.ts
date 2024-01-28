import { Component, OnInit } from '@angular/core';
import { Reservation } from '../modules/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
