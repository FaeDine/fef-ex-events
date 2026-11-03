import { Component } from '@angular/core';
import { VehicleMake } from '../models/vehicle-make';
import { VEHICLE_MAKES } from '../mocks/vehicle-makes';

@Component({
  selector: 'app-select-control',
  standalone: false,
  templateUrl: './select-control.html',
  styleUrl: './select-control.css',
})
export class SelectControl {
  // TODO (Part 3): expose the mock data to the template
  //   vehicleMakes - VehicleMake[] filled from VEHICLE_MAKES
  //   selectedVehicle - VehicleMake or undefined

  // TODO: onSelect(value: string): void
  //   - if value is a number, find the make with that id
  //   - otherwise clear selectedVehicle
}
