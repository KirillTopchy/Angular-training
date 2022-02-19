import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CatFact } from 'src/app/shared/models/cat-fact.model';


@Component({
  selector: 'app-cat-fact-card',
  templateUrl: './cat-fact-card.component.html',
  styleUrls: ['./cat-fact-card.component.scss']
})
export class CatFactCardComponent {
  @Input() 
  fact?: CatFact;

  @Input()
  index?: number;

  @Output()
  sayHiEvent = new EventEmitter<string>()


  ngOnInit(): void {
  }

  sayHi(): void {
    this.sayHiEvent.emit('HELLO!')
  }

}
