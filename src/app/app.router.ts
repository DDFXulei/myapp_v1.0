import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";

export  const appRooutes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  //./workspace/workspace.module#WorkspaceModule
  {path: 'home', loadChildren: './my-market/my-market.module#MyMarketModule'},
  {path: 'newcar', loadChildren: './newcar/newcar.module#NewcarModule'},
  {path: 'usedcar', loadChildren: './usedcar/usedcar.module#UsedcarModule'},
  {path: 'budget', loadChildren: './budget/budget.module#BudgetModule'},
  {path: '' , component: AppComponent},
  {path: '**', component: LoginComponent}
]
