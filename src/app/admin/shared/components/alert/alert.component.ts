import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../admin-layout/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {


  @Input() deley = 5000


  public text: string
  public type = 'success'

  aSub: Subscription

  constructor(private alert:AlertService) { }

  ngOnInit() {
    this.aSub = this.alert.alert$.subscribe(alert => {
      this.text = alert.text,
      this.type = alert.type

      const timeout = setTimeout( ()=>{
        clearTimeout(timeout)
        this.text = ''
}, this.deley)

    })
  }

  ngOnDestroy() {
    if(this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
