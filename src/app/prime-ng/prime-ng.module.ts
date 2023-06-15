import { ButtonModule   } from 'primeng/button';
import { NgModule       } from '@angular/core';
import { MenuModule     } from 'primeng/menu';
import { MenubarModule  } from 'primeng/menubar';
import { CardModule     } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule    } from 'primeng/panel';
import { ToolbarModule  } from 'primeng/toolbar';
import { TableModule    } from 'primeng/table';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
