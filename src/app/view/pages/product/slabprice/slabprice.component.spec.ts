import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabpriceComponent } from './slabprice.component';

describe('SlabpriceComponent', () => {
  let component: SlabpriceComponent;
  let fixture: ComponentFixture<SlabpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlabpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
