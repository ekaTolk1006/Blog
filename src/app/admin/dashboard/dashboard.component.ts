import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../interfaces';
import { CreatePageService } from '../shared/components/admin-layout/services/create.page.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{


  posts:Post[] = []
  pSub: Subscription
  constructor(private CreatePostService:CreatePageService) {

  }
  
   

  ngOnInit() {

    this.pSub = this.CreatePostService.getAll().subscribe((posts) => {
      this.posts = posts
    })
  }

  removePostId(id:string){}

ngOnDestroy() {
  if (this.pSub){
    this.pSub.unsubscribe()
  }
}
  
}
