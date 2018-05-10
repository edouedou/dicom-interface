import { Component, OnInit } from '@angular/core';
import { PatientService} from '../services/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  name: string ='nom';
  ID: string = 'xxxx';

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

  }

}
