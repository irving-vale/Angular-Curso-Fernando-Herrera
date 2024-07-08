import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
   public name :string = 'ironman';
   public age :number = 45;



    // capitalizado = (value:string):string => this.name=value.toUpperCase();
  get capitalizado():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(value:string):void{
    this.name = value;
  }

  changeAge(value:number):void{
    this.age = value + 5;
  }


}
