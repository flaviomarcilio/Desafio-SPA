import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FolderComponent } from './component/folder/folder.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
    declarations: [
        NavBarComponent,
        FolderComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBarComponent,
        FolderComponent
    ]
})
export class CoreModule { }