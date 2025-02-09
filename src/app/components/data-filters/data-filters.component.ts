// data-filters.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-data-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule],
  templateUrl: './data-filters.component.html',
  styleUrls: ['./data-filters.component.scss']
})
export class DataFiltersComponent {
  
  selectedMarket: string = '';
  selectedCommodity: string = '';
  selectedDateRange: string = '';
  rangeDates: string= '';
  isFilterContentOn: boolean= true;

  fetchData() {
    // console.log('Fetching data with filters:', {
    //   market: this.selectedMarket,
    //   commodity: this.selectedCommodity,
    //   dateRange: this.selectedDateRange
    // });
  }

  closeFiltersContent() {
    this.isFilterContentOn=!this.isFilterContentOn;
  }
}