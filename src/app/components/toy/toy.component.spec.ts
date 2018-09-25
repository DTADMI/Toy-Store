import { Component, NO_ERRORS_SCHEMA, ViewChild, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ToyComponent, Toy } from './toy.component';

@Component({
  selector: 'app-parent',
  template: '<app-toy [toy]="toy" (select)="select($event)"></app-toy>'
})
class ParentComponent {
  @ViewChild(ToyComponent) child;
  toy: Toy = {
    title: 'game',
    icon: 'gameIcon',
    price: 77,
    selected: true
  };
  select = () => {};
}

describe('ToyComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyComponent, ParentComponent ],
      providers: [],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ParentComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should init the component', () => {
    const el1 = fixture.debugElement.query(By.css('article'));
    const el2 = fixture.debugElement.query(By.css('i'));
    fixture.detectChanges();

    expect(el1.nativeElement.className).toContain('selected');
    expect(el2.nativeElement.className).toContain('mdi-gameIcon');

    expect(component.child.toy).toEqual(component.toy);
  });

  it('should select a toy', () => {
    const el1 = fixture.debugElement.query(By.css('article'));
    spyOn(component, 'select');
    fixture.detectChanges();
    el1.nativeElement.click();

    expect(component.select).toHaveBeenCalledWith(component.toy);
  });
});
