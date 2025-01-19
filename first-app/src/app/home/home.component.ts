import { Component, inject } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // private router :Router = inject(Router);

  // constructor(private router: Router) { 

  // }

  // navigate(){
  //   this.router.navigate(['/about']);
  // }


  title = 'first-app';

  onClick(){
    this.title = 'Hello World';
  }

}
