import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'home/view-more',
        loadComponent: () =>
          import('../view-more/view-more.page').then((m) => m.ViewMorePage),
      },
      {
        path: 'my-stuff',
        loadComponent: () =>
          import('../my-stuff/my-stuff.page').then((m) => m.MyStuffPage),
      },
      {
        path: 'downloads',
        loadComponent: () =>
          import('../downloads/downloads.page').then((m) => m.DownloadsPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
