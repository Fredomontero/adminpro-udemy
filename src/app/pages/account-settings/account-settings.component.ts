import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService) { }

  ngOnInit() {
    this.setCheckClass();
  }

  changeColor( theme: string, link: any ) {
    console.log(link);

    this.updateCheck( link );
    this._settings.setTheme( theme );
  }

  updateCheck( link: any ) {
    let selectors: any = document.getElementsByClassName('selector');
    for ( let ref of selectors ) {
      ref.classList.remove( 'working' );
    }

    link.classList.add('working');

  }

  setCheckClass() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;

    for ( let ref of selectors ) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
