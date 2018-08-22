import {AppComponent} from "./app.component";

export  const appRooutes = [
  {path: '' , redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: AppComponent},
]
