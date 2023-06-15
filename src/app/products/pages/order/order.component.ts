import { Component } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
  ]

  public toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder ( value: string ): void {
    console.log(value);
    this.orderBy = value as keyof Hero;
  }
}
