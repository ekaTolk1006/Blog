import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CreateResponse, Post } from "src/app/admin/interfaces";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})

export class CreatePageService{


    constructor(private http:HttpClient){}



    create(post:Post):Observable<Post>{
        return this.http.post(`${environment.DbKey}/posts.json`, post)
        .pipe(map((response:CreateResponse) =>{
            return {
                ...post,
                id: response.name,
                date: new Date(post.date)
            } 

        }))
    }
}