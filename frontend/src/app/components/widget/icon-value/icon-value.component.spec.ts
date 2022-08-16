import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconValueComponent } from './icon-value.component';

describe('IconValueComponent', () => {
  let component: IconValueComponent;
  let fixture: ComponentFixture<IconValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
