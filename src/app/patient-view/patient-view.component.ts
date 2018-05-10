import { Component, OnInit, OnDestroy } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  isAuth = false;
  patients: any[];
  patientSubscription: Subscription;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    //this.patients = this.patientService.patients;
    this.patientSubscription = this.patientService.patientsSubject.subscribe(
      (appareils: any[]) => {
        this.patients = this.patientService.patients;
      }
    );
    this.patientService.emitPatientSubject();
  }

  onHome() {
    console.log('Go home');
    this.patientService.emitPatientSubject();
  }

  onDeleteNames(){
    if(confirm('Etes-vous sûr de vouloir supprimer les noms ?')) {
      this.patientService.deleteAllPatientName();
    } else {
      return null;}
  }

  ngOnDestroy(){
    this.patientSubscription.unsubscribe();
  }

  onSave(){
    this.patientService.savePatientsToServer()
  }

  onFetch(){
    this.patientService.getPatientsFromServer()
  }

}
