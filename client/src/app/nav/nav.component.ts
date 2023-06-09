import { Component,OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}

  constructor(public accountService:AccountService,private toastr:ToastrService){}
  ngOnInit():void{

  }

  login(){
    this.accountService.login(this.model).subscribe(response=>{
      console.log(response);
    });
  }

  logout(){
    this.accountService.logout();
  }
}
