import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public loadDelay = false;

  constructor(ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.loadDelay = true;
      ref.detectChanges();
    }, 2000)
  }

}
