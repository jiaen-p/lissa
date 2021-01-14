import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductoComponent } from './componente-producto.component';

describe('ComponenteProductoComponent', () => {
  let component: ComponenteProductoComponent;
  let fixture: ComponentFixture<ComponenteProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
