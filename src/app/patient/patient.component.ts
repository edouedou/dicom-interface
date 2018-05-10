import { Component, Input, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @Input() patientName: string = "Albert";
  @Input() patientID: string = "1234567";
  @Input() patientSex: string = "M";
  @Input() index: number;
  @Input() id: number;


  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  getPatientSex(){
    return this.patientSex;
  }

  onDeletePatientName(){
    this.patientService.deletePatientName(this.index);
  }
}
