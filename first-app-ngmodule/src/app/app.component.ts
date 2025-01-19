import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    // this.changeTitle();
  }

  changeTitle(){
    this.title = 'first-app-shashmit';
  }
  title = 'first-app-ngmodule';
}
