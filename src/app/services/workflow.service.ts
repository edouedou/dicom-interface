import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WorkflowService {

  dicomRequestsSubject = new Subject<any[]>();
  patients: any;

  constructor(private httpClient: HttpClient) { }


  cEcho(url: string) {
    this.httpClient
      .get<any[]>(url, )
      .subscribe(
        (response) => {
          this.patients = response;
          this.emitDicomRequestsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


  //Creata UPS

  //Update UPS
  //SearchForUPS
  //RetrieveUPS
  //Change UPSState
  //Request UPS cancellation
  //Create Subscription
  //SuspendGlobal Subscription
  //DeleteSubscription
  //OpenEventChannel
  //SendEventReport

  emitDicomRequestsSubject(){
    this.dicomRequestsSubject.next(this.patients.slice());
  }
}
