import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {
    onDataReceived: EventEmitter<number>;
    constructor() {
        this.onDataReceived = new EventEmitter<number>();
    }

    // method to emite event based on data received
    getData(id: number): void {
        this.onDataReceived.emit(id);
    }
}