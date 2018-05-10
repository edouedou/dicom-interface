import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PatientService{

  patientsSubject = new Subject<any[]>();

  /*
  patients = [
    {
      id:1,
      name: 'CR7',
      sex: 'unknown'
    },
    {
      id:2,
      name:'Serena Williams',
      sex: 'F'
    }
  ];

  */

  patients = [];

   constructor (private httpClient: HttpClient){}

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

  getPatientsFromServer() {
    this.httpClient
      .get<any[]>('https://interface-dicom.firebaseio.com//patients.json')
      .subscribe(
        (response) => {
          this.patients = response;
          this.emitPatientSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitPatientSubject(){
    this.patientsSubject.next(this.patients.slice());
  }

  deleteAllPatientName(){
    for (let patient of this.patients){
      patient.name= '';
    }
    this.emitPatientSubject();
  }

  deletePatientName(i: number){
    this.patients[i].name = '';
    this.emitPatientSubject();
  }

  getPatientByID(id: number){
    const patient = this.patients.find(
      (s) => {
        return s.id === id;
      }
    );
    return patient;
  }

  addPatient(name: string, sex: string){
    const patientObject = {
      id:0,
      name:'',
      sex: ''
    };
    patientObject.name = name;
    patientObject.sex = sex;
    patientObject.id = this.patients[this.patients.length - 1].id + 1;
    this.patients.push(patientObject);
    this.emitPatientSubject();
  }

}
