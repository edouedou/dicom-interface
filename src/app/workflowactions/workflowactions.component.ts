import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-workflowactions',
  templateUrl: './workflowactions.component.html',
  styleUrls: ['./workflowactions.component.scss']
})
export class WorkflowactionsComponent implements OnInit {

  AffectedSOPInstanceUID: string;
  UPSInstanceUID: string;
  query: string;
  state: string;
  transaction: string;
  AETitle: string;
  eventReport: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

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

}
