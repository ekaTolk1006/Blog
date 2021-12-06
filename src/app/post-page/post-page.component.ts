import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../admin/interfaces';
import { CreatePageService } from '../admin/shared/components/admin-layout/services/create.page.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {



posts$:Observable<Post>

  constructor(
    private rout: ActivatedRoute,
    private createPage: CreatePageService
  ) { }

  ngOnInit(){

    this.posts$ = this.rout.params 
    .pipe(switchMap((params: Params) =>{ 
      return this.createPage.getById(params['id'])
    })
    )
  }

}
