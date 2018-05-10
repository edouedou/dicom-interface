import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-studyactions',
  templateUrl: './studyactions.component.html',
  styleUrls: ['./studyactions.component.scss']
})
export class StudyactionsComponent implements OnInit {

  studies: string;
  studiesMatch: string;
  studyUID: string;
  metadata: string;
  series: string;
  seriesUID: string;
  instancesMatch: string;
  instanceUID: string;
  frames: string;
  bulkDataRef: string;

  onAction1(){

  }
  onAction2(){

  }
  onAction3(){

  }
  onAction4(){

  }
  onAction5(){

  }
  onAction6(){

  }
  onAction7(){

  }
  onAction8(){

  }
  onAction9(){

  }
  onAction10(){

  }
  onAction11(){

  }
  onAction12(){

  }
  onAction13(){

  }


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
