import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../interfaces';
import { AlertService } from '../shared/components/admin-layout/services/alert.service';
import { CreatePageService } from '../shared/components/admin-layout/services/create.page.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{


  posts:Post[] = []
  pSub: Subscription
  searchStr = ''
  dSub:Subscription
  constructor(
    private CreatePostService:CreatePageService,
    private alert:AlertService) {

  }
  
   

  ngOnInit() {

    this.pSub = this.CreatePostService.getAll().subscribe((posts) => {
      this.posts = posts
    })
  }

  remove(id:string){
   this.dSub = this.CreatePostService.remove(id).subscribe(()=>{
      this.posts = this.posts.filter( post => post.id !== id)
      this.alert.warning('Post successesfuly deleted!')

    })
  }

ngOnDestroy() {
  if (this.pSub){
    this.pSub.unsubscribe()
  }
  if(this.dSub){
    this.dSub.unsubscribe()
  }
}
  
}
