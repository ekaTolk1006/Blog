
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import { Post } from '../interfaces';
import { AlertService } from '../shared/components/admin-layout/services/alert.service';
import { CreatePageService } from '../shared/components/admin-layout/services/create.page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

form:FormGroup
post:Post
submitted = false

uSub: Subscription

  constructor(
    private route:ActivatedRoute,
    private createPage:CreatePageService,
    private alert:AlertService
    ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params:Params) =>{
      return this.createPage.getById(params['id'])
    })
    ).subscribe((post:Post) =>{
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }
  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }


  submit() {
    if(this.form.invalid){
      return
    }
    this.submitted = true

    this.createPage.update( {
      ...this.post,
      text: this.post.text,
      title: this.post.title,
    }).subscribe(() =>{
      this.submitted = false
      this.alert.danger('your post updates!')
   
    })
  }

  
  }

