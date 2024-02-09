import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkbox,
  checkboxOutline,
  download,
  home,
  homeOutline,
  radioButtonOff,
  radioButtonOn,
  search,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  public selectedTab: string = 'home';

  constructor() {
    addIcons({
      checkbox,
      checkboxOutline,
      download,
      home,
      homeOutline,
      radioButtonOff,
      radioButtonOn,
      search,
    });
  }

  public updateIcons({ tab }: { tab: string }) {
    this.selectedTab = tab;
  }

  public tabs: Tab[] = [
    {
      tab: 'home',
      title: 'Home',
      iconActive: 'home',
      iconInactive: 'home-outline',
    },
    {
      tab: 'my-stuff',
      title: 'My Stuff',
      iconActive: 'checkbox',
      iconInactive: 'checkbox-outline',
    },
    {
      tab: 'downloads',
      title: 'Downloads',
      iconActive: 'download',
      iconInactive: 'download',
    },
    {
      tab: 'search',
      title: 'Search',
      iconActive: 'search',
      iconInactive: 'search',
    },
    {
      tab: 'profile',
      title: 'Profile',
      iconActive: 'radio-button-on',
      iconInactive: 'radio-button-off',
    },
  ];
}

interface Tab {
  tab: string;
  title: string;
  iconActive: string;
  iconInactive: string;
}
