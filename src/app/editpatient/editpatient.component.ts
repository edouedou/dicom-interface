import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PatientService} from '../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.scss']
})
export class EditpatientComponent implements OnInit {

  defaultSex= 'M';
  defaultName= "Nom";

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name = form.value['name'];
    const sex = form.value['sex'];
    this.patientService.addPatient(name, sex);
    this.router.navigate(['/patients']);
  }

}
