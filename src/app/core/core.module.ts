import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { FolderComponent } from './component/folder/folder.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ConstructionComponent } from './component/construction/construction.component';
import { IconComponent } from './component/icon/icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        CardComponent,
        NavBarComponent,
        FolderComponent,
        IconComponent,
        ConstructionComponent
    ],
    imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        RouterModule.forChild([
            {
                path: 'movies/info/:id', component: CardComponent
            },
            {
                path: 'movies/:id', component: FolderComponent
            },
            {
                path: 'construction', component: ConstructionComponent
            }
        ])
    ],
    exports: [
        NavBarComponent,
        FolderComponent
    ]
})
export class CoreModule { }