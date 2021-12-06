import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../admin/interfaces';
import { CreatePageService } from '../admin/shared/components/admin-layout/services/create.page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

posts$:Observable<Post[]>

  constructor(
    private pageService:CreatePageService
  ) { }

  ngOnInit(): void {

   this.posts$ = this.pageService.getAll()
  }

}
