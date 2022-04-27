import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfdfhshfComponent } from './gfdfhshf.component';

describe('GfdfhshfComponent', () => {
  let component: GfdfhshfComponent;
  let fixture: ComponentFixture<GfdfhshfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GfdfhshfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GfdfhshfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
