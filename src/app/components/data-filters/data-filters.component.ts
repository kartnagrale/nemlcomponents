import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-data-filters',
  standalone: true,
  imports: [CommonModule, FormsModule, CalendarModule, AutoCompleteModule, ButtonModule],
  templateUrl: './data-filters.component.html',
  styleUrls: ['./data-filters.component.scss']
})
export class DataFiltersComponent {
  
  selectedMarket: string = '';
  selectedCommodity: string = '';
  selectedDateRange: string = '';
  isFilterContentOn: boolean= true;
  Markets: any[] = [];
  Commodities: any[] = [];
  

  fetchData() {
    console.log('Fetching data with filters:', {
      market: this.selectedMarket,
      commodity: this.selectedCommodity,
      dateRange: this.selectedDateRange
    });
  }

  closeFiltersContent() {
    this.isFilterContentOn=!this.isFilterContentOn;
  }

  searchMarket(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];
    this.Markets = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
  }
  searchCommodities(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];
    this.Commodities = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
  }

  //This below(commented) code filters an array of Markets (this.Markets) to include only those whose names start with the 
  // user-provided query (case-insensitive) and stores the result in this.filteredMarkets.

  // searchMarket(event: any) {
  //   const filtered: any[] = [];
  //   const query = event.query;
  //   for (let i = 0; i < this.Markets.length; i++) {
  //       const country = this.searchMarket[i];
  //       if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //           filtered.push(country);
  //       }
  //   }
  //   this.filteredMarkets = filtered;
  // }
}
