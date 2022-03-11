import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
@Injectable()
export class CubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public readNums(): void {
    const grid = document.getElementById('grid');
    console.log(grid?.parentElement?.children[0]);

  }

}
