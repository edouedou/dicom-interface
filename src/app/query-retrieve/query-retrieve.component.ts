import { Component, Input, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {DicomRequestsService} from '../services/dicom-requests.service';

@Component({
  selector: 'app-query-retrieve',
  templateUrl: './query-retrieve.component.html',
  styleUrls: ['./query-retrieve.component.scss']
})
export class QueryRetrieveComponent implements OnInit {

  authStatus: boolean;

  @Input() serverIP: string;
  @Input() serverPort: string;
  @Input() serverAET: string;

  //Ajouter d'autres paramètres de query?

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onQueryRetrieve(){
    //Code de construction de la query à ajouter
    this.router.navigate(['querytype']);
    //this.dicomRequestsService.targetAET = this.serverIP;
    //this.dicomRequestsService.targetIP =  this.serverIP;
    //this.dicomRequestsService.targetPort =  this.serverPort;

  }

  onEcho(){
    //utiliser la méthode ping() de ping service

  }
}
