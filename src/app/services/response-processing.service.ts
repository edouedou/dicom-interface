
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Response } from '../models/response.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class ResponseProcessingService {


  responses: Response[] = [];
  responseSubject = new Subject<Response[]>();

  emitResponse() {
    this.responseSubject.next(this.responses);
  }

  saveResponse() {
    firebase.database().ref('/responses').set(this.responses);
  }

  getResponses() {
    firebase.database().ref('/responses')
      .on('value', (data: DataSnapshot) => {
          this.responses = data.val() ? data.val() : [];
          this.emitResponse();
        }
      );
  }

  getSingleResponse(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/responses/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewResponse(newResponse: Response) {
    this.responses.push(newResponse);
    this.saveResponse();
    this.emitResponse();
  }

  removeResponse(response: Response) {
    const responseIndexToRemove = this.responses.findIndex(
      (responseEl) => {
        if(responseEl === response) {
          return true;
        }
      }
    );
    this.responses.splice(responseIndexToRemove, 1);
    this.saveResponse();
    this.emitResponse();
  }


  //Rajouter la méthode d'enregistrement de la réponse dans Firebase (utilise autres services)

}
