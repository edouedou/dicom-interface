import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-querytype',
  templateUrl: './querytype.component.html',
  styleUrls: ['./querytype.component.scss']
})
export class QuerytypeComponent implements OnInit {

  authStatus: boolean;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onStudyActions(){
    this.router.navigate(['studyactions']);
  }
  onWorkflowActions(){
    this.router.navigate(['workflowactions']);
  }

}
