import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, CrudComponent } from "./views"; 
import { ProductCreateComponent } from "./components";

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: CrudComponent
},
{
  path:"products/create",
  component: ProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
