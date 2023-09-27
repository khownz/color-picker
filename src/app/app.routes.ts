import {Routes} from '@angular/router';
import {ColorOverviewComponent} from './components/color-overview/color-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: ColorOverviewComponent,
  },
  {
    path: ':initialPaintName',
    component: ColorOverviewComponent,
  },
];
