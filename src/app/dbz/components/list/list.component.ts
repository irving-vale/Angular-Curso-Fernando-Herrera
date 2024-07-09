import { Component, Input,} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

    @Input()
    public characterList: Character[] = [

      // se esta jalando los valores de main.page.component.ts y se esta mostrando en list.component.html
      // por medio de la anotacion @Input()
    ];

}
