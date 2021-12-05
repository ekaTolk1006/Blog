import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fbAuthResponse, User } from "src/app/admin/interfaces";
import { Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environment/environment";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
   providedIn:'root'
})
 export class AuthService{

   public error$:Subject<string> = new Subject<string>()

   constructor(private http :HttpClient){}
    
  get token() :string {
     const expDate = new Date(localStorage.getItem('fb-token-expires'))
     if(new Date()> expDate){
        this.logout()
        return null
     }
     return localStorage.getItem('fb-token')
  }

   login(user:User): Observable<any>{
      user.returnSecureToken = true
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
    .pipe(
       tap(this.setTiken),
       catchError(this.handleError.bind(this))
    )

   }

   logout(){
      this.setTiken(null)
   }

   isAuthenticated() : boolean{
      return !!this.token
   }
 
   private handleError(error:HttpErrorResponse){
      const {message} = error.error.error
   

      switch (message) {
            case 'INVALID_EMAIL': 
                this.error$.next('Wrong email')
               break
               case 'INVALID_PASSWORD':
                this.error$.next('Wrong password')
                  break  
                  case 'EMAIL_NOT_FOUND':
                this.error$.next('Email not found')
                     break 
            
            
      }

      return throwError(error);
      

   }
   private setTiken(response:fbAuthResponse | null) {
      if(response) {
         const expDate = new Date().getTime() +  +response.expiresIn * 1000;
     localStorage.setItem('fb-token', response.idToken),
     localStorage.setItem('fb-token-expires', expDate.toString())

      } else{
         localStorage.clear()
      }
   
   }


    
    
    
}