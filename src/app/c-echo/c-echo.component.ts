import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-c-echo',
  templateUrl: './c-echo.component.html',
  styleUrls: ['./c-echo.component.scss']
})
export class CEchoComponent implements OnInit {

  authStatus: boolean;

  @Input() targetIP: string;
  @Input() targetURL: string;



  constructor(private authService: AuthService, private  httpClient: HttpClient) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  //utiliser la méthode ping() de ping service
  onEcho() {
    if (this.targetURL === 'www.google.ca') {
      console.log('ca marche');
    }
    this.httpClient
      .get<any>(this.targetURL,
        {
          headers: new HttpHeaders({'Content-Type': 'text/html', 'Authorization': 'my-auth-token'}),
          observe: 'response',
          responseType: 'text'
        })
      .pipe().subscribe(
      response => {
        console.log(response.status);
      }
    );
  }

}
