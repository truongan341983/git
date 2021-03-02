import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomeComponent } from './pipe-custome.component';

describe('PipeCustomeComponent', () => {
  let component: PipeCustomeComponent;
  let fixture: ComponentFixture<PipeCustomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCustomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
