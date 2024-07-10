import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { identity } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    // se esta jalando los valores de main.page.component.ts y se esta mostrando en list.component.html
    // por medio de la anotacion @Input()
  ];

  @Output()
  oneDelete: EventEmitter<string> = new EventEmitter();

  // EventEmitter <T> oneDelete = new EventEmitter<>(); es como construir un objeto en java

  oneDeleteCharacter(id?: string): void {
    // TODO: Emitir el ID del personaje a eliminar
    if (!id) return;

    this.oneDelete.emit(id);
  }

  // oneDeleteCharacter(index:number):void{
  //   this.characterList.splice(index, 1);
  // }
}
