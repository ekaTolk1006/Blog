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
    remove(id: string) {
      throw new Error('Method not implemented.');
    }


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

    getAll():Observable<Post[]> {
        return this.http.get(`${environment.DbKey}/posts.json`)
        .pipe(map( (response:{[key:string]: any}) =>{
             return Object
            .keys(response)
            .map( key => ({
                ...response[key],
                id: key,
                date: new Date(response[key].date)
            }))
            

        }))
    }

    removeId(id: string):Observable<void>{
        return this.http.delete<void>(`${environment.DbKey}/posts/${id}.json`);
    }
}