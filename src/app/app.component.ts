import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataFiltersComponent } from './components/data-filters/data-filters.component';
import { SsbDetailsComponent } from "./components/ssb-details/ssb-details.component";
// import { TopTenMarketsComponent } from './components/top-ten-markets/top-ten-markets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataFiltersComponent, SsbDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'umpdashboard';
}
