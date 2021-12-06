
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Post } from '../interfaces';
import { CreatePageService } from '../shared/components/admin-layout/services/create.page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

form:FormGroup

  constructor(
    private route:ActivatedRoute,
    private createPage:CreatePageService
    ) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params:Params) =>{
      return this.createPage.getById(params['id'])
    })
    ).subscribe((post:Post) =>{
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
 
    })
  

    

    
   
    }
  
  }

