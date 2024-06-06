import { Component } from '@angular/core';
import { NewsService } from '../../../../server/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allnews: any;
  constructor(public _newservice: NewsService) {
    this.allnews = this._newservice.getnews();
  }


}
