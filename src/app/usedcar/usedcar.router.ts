import {UsedcarComponent} from "./usedcar.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ListContainerComponent} from "./list-container/list-container.component";

export  const usedcarRooutes = [
  { path: '' ,
    component: UsedcarComponent,
    children: [
      { path: '', redirectTo: 'productList', pathMatch: 'full' },
      { path: 'productList', component: ListContainerComponent },
      { path: 'productDetail/:productCode', component: ProductDetailComponent},
      { path: '**', component: ListContainerComponent}
     ]
    }

]
