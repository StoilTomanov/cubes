import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  numberOfRows: number = 3;
  rows: HTMLDivElement[] = new Array(this.numberOfRows);
  message: string = 'Press Check button to run the check';
  includedNum: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public readNums(): void {
    const arr = document.querySelectorAll<HTMLInputElement>('.grid');
    let msg = document.getElementById('msg');
    arr.forEach((el: HTMLInputElement) => {
      if (this.includedNum.includes(el.value)) {
        this.message = 'Numbers are not unique!';
        msg!.style.color = 'red';
        return;
      } else {
        this.includedNum.push(el.value);
        this.message = 'Success!';
        msg!.style.color = 'green';
      }
    });

    arr.forEach((el: HTMLInputElement) => {
      el.value = '';
    });
  }
}
