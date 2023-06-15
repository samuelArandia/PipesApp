import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string =' Samuel';
  public gender: 'male'| 'female' | 'otros'= 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
    'otros': 'invitarle'
  }

  changeClient(): void {
    this.name = 'Daniela';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Samuel', 'Daniela', 'Juan', 'Pedro', 'Maria', 'Moises', 'Sarina'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  attendClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Samuel',
    age: 25,
    address: 'Calle 123',
  }

  // ASync Pipe

  public myObservable: Observable<number> = interval(1000)
    .pipe(
      tap(value => console.log('intervalo', value)),
    );

  public myPromiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    }, 3000);
  });

}
