import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
  numberOfRows: number = 3;
  rows: HTMLDivElement[] = new Array(this.numberOfRows);
  message: string = '';
  includedNum: string[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public readNums(): void {
    const arr = document.querySelectorAll<HTMLInputElement>('.grid');
    arr.forEach((el: HTMLInputElement) => {
      if (this.includedNum.includes(el.value)) {
        this.message = 'Numbers are not unique!'
        return;
      } else{
        this.includedNum.push(el.value);
      }
      this.message = 'Success!'
    });
  }
}
