import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'samuel arandia';
  public nameUpper: string = 'SAMUEL ARANDIA';
  public fullName: string = 'sAmUeL aRaNdiA';

  public customDate: Date = new Date();
}
