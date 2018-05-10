import { Component, OnInit, OnDestroy } from '@angular/core';
import {PatientService} from './services/patient.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Subscription} from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dicom interface';
  isAuth = false;



  constructor(private patientService: PatientService) {

    const config = {
      apiKey: 'AIzaSyBjbWWnWKAfB02qFYH3966MF0uO4NZzXMk',
      authDomain: 'interface-dicom-new.firebaseapp.com',
      databaseURL: 'https://interface-dicom-new.firebaseio.com',
      projectId: 'interface-dicom-new',
      storageBucket: 'interface-dicom-new.appspot.com',
      messagingSenderId: '41766040035'
    };
    firebase.initializeApp(config);


    /*    const config = {
          apiKey: 'AIzaSyC3vcw6NuvLs4BFHZuC14E6wGRHpMwJVFk',
          authDomain: 'interface-dicom.firebaseapp.com',
          databaseURL: 'https://interface-dicom.firebaseio.com',
          projectId: 'interface-dicom',
          storageBucket: 'interface-dicom.appspot.com',
          messagingSenderId: '585793250697'
        };
        firebase.initializeApp(config);
    */

    //crée un timeout pour mettre isAuth à true apres 4s
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription= counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('An error occured:' +error);
      },
      ()=> {
        console.log('Observable complete');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
