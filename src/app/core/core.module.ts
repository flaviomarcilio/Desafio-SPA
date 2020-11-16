import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { FolderComponent } from './component/folder/folder.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        CardComponent,
        NavBarComponent,
        FolderComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild([
            {
                path: 'movies/info/:id', component: CardComponent
            }
        ])
    ],
    exports: [
        NavBarComponent,
        FolderComponent
    ]
})
export class CoreModule { }