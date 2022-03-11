import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cube';

  public clearGrid() {
    const arr = document.querySelectorAll<HTMLInputElement>('.grid');
    arr.forEach((el) => {
      el.value = '';
    });
  }
}
