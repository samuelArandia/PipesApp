import { ButtonModule   } from 'primeng/button';
import { NgModule       } from '@angular/core';
import { MenuModule     } from 'primeng/menu';
import { MenubarModule  } from 'primeng/menubar';
import { CardModule     } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule    } from 'primeng/panel';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
