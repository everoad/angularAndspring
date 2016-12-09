import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BoardComponent }    from './components/board/board.component';
import { MainComponent }    from './components/main/main.component';

const routes: Routes = [
    {
        path: 'api/board',
        component: BoardComponent
    },
    {
        path: '',
        component: MainComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
