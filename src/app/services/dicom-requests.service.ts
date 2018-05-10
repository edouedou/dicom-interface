import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
//import {DicomTagsModel} from '../models/dicomTags.model';
import {Response} from '../models/response.model';
import {StudyactionsComponent} from '../studyactions/studyactions.component';

@Injectable()
export class DicomRequestsService{

  patients: any[];
  dicomRequestsSubject = new Subject<any[]>();
  studyUID: string;

  targetIP: string;
  targetPort: string;
  targetAET: string;

  const targetURL = 'http://localhost:8042/app/explorer.html' ;


  constructor (private httpClient: HttpClient, private response: Response){}

  savePatientsToServer(){
    this.httpClient
      .put('https://interface-dicom.firebaseio.com/patients.json', this.patients)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  /*
  cEcho(url: string) {
    this.httpClient
      .get<any[]>(this.targetURL )
      .subscribe(
        (response) => {
          this.response.texte = response;
          this.emitDicomRequestsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  */


  //Store instances
  Query for matching studies
  retrieveStudies(url: string) {
    this.httpClient
      .get<any[]>(this.targetURL + '/studies?', )
      .subscribe(
        (response) => {
          this.response.texte = response;
          this.emitDicomRequestsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  //Retrieve entire study
    retriveEntireStudy(url: string)
    {
      this.httpClient
        .get<any[]>(this.targetURL + '/studies?' + this.studyUID,)
        .subscribe(
          (response) => {
            this.response.texte = response;
            this.emitDicomRequestsSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
  //Store instances
   /* storeStudyInstance(url: string)
    {
      this.httpClient
        .post<any[]>(this.targetURL + '/studies/', this.studyUID)
        .subscribe(
          (response) => {
            this.response.texte = response;
            this.emitDicomRequestsSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
    */

  //Retrieve metadata
  //Query for matching series in a study
  //Retrieve entire series
  //Retrieve series metadata
  //Query for matching instances in a series
  //Retrieve instance
  //Retrieve insrtance metadata
  //Retrieve frames in an instance
  //Retrieve bulk data


  */
  emitDicomRequestsSubject(){
    this.dicomRequestsSubject.next(this.patients.slice());
  }



}
