import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations: [
                    HeroeComponent,
                    ListadoComponent
    ],
    //exports especifica que cosas seran visibles o publicas fuera de este modulo
    exports: [
                ListadoComponent

    ],

    imports: [
      CommonModule
    ]

})




export class HeroesModule{}





