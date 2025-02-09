import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenMarketsComponent } from './top-ten-markets.component';

describe('TopTenMarketsComponent', () => {
  let component: TopTenMarketsComponent;
  let fixture: ComponentFixture<TopTenMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTenMarketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopTenMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
