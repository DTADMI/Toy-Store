import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyActions, TOY } from './toy.actions';

import { Toy } from '../../components/toy/toy.component';
import { NgRedux } from '@angular-redux/store';
import { ToyService } from '../../core/toy/toy.service';
import { of } from 'rxjs';

const toy: Toy = {
  title: 'game',
  icon: 'gameIcon',
  price: 77,
  selected: true
};

describe('ToyActions', () => {
  let service: ToyActions;
  const spyRedux = jasmine.createSpyObj('mySpyRedux', ['dispatch']);
  const spyToyService = jasmine.createSpyObj('mySpyToyService', ['getToys']);
  //let fixture: ComponentFixture<ToyActions>;

spyToyService.getToys.and.returnValue(of([ toy ]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        ToyActions,
        { provide: NgRedux, useValue: spyRedux },
        { provide: ToyService, useValue: spyToyService}
      ]
    });
  });

  beforeEach(inject([ToyActions], (_t: ToyActions) => {
    service = _t;
  }));

  it('should get toys', () => {

    service.getToys();

    expect(spyToyService.getToys).toHaveBeenCalled();
    expect(spyRedux.dispatch).toHaveBeenCalledWith({
      type: TOY.GET_TOYS,
      toys: [ toy ]
    });

  });
});
