import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyItemQuantityComponent } from './modify-item-quantity.component';

describe('ModifyItemQuantityComponent', () => {
  let component: ModifyItemQuantityComponent;
  let fixture: ComponentFixture<ModifyItemQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyItemQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyItemQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
