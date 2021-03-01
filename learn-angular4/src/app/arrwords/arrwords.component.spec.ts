import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrwordsComponent } from './arrwords.component';

describe('ArrwordsComponent', () => {
  let component: ArrwordsComponent;
  let fixture: ComponentFixture<ArrwordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrwordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
