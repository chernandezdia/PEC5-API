import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./components/data/data.component";
import { DatasComponent } from "./components/datas/datas.component";

const routes: Routes = [
    { path: '', component: DatasComponent },
    { path: 'data/:id', component: DataComponent },
    { path: '**', component: DatasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}