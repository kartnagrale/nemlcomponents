import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbDetailsComponent } from './ssb-details.component';

describe('SsbDetailsComponent', () => {
  let component: SsbDetailsComponent;
  let fixture: ComponentFixture<SsbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsbDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
