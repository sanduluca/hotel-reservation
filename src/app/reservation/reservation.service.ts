import { Injectable } from '@angular/core';
import { Reservation } from '../modules/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    const savedReservations = getLocalStorage()?.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations() {
    return this.reservations;
  }

  getReservation(id: string) {
    return this.reservations.find((res) => res.id === id);
  }
  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    getLocalStorage()?.setItem(
      'reservations',
      JSON.stringify(this.reservations)
    );
  }
  deleteReservation(id: string) {
    const index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    getLocalStorage()?.setItem(
      'reservations',
      JSON.stringify(this.reservations)
    );
  }
  updateReservation(id: string, reservation: Reservation) {
    const index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = reservation;
    getLocalStorage()?.setItem(
      'reservations',
      JSON.stringify(this.reservations)
    );
  }
}

export function getLocalStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}
