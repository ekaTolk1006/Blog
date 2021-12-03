import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


 
  constructor(private rout:Router) { }

  ngOnInit(): void {
  }
  logOut(event:Event){
    event.preventDefault();
    this.rout.navigate(['/admin/login']);
  }
}
