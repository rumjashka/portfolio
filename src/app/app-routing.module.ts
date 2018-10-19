import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { WhiteComponent } from './white/white.component';
import { AboutComponent } from './about/about.component';
import { TextComponent } from './text/text.component';
import { TextTwoComponent } from './text-two/text-two.component';
import { TextThreeComponent } from './text-three/text-three.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { WOneComponent } from './w-one/w-one.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },

  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '1',
    component: WhiteComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about',
    component: TextComponent
  },
  {
    path: 'about',
    component: TextTwoComponent
  },
  {
    path: 'about',
    component: TextThreeComponent
  },
  {
  path: '',
  component: FooterComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'works',
    component: WOneComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
