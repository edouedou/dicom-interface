import { Component, OnInit } from '@angular/core';
import {Response} from '../models/response.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseProcessingService} from '../services/response-processing.service';

@Component({
  selector: 'app-single-response',
  templateUrl: './single-response.component.html',
  styleUrls: ['./single-response.component.scss']
})
export class SingleResponseComponent implements OnInit {

  response: Response;

  constructor(private route: ActivatedRoute, private responseProcessingService: ResponseProcessingService,
              private router: Router) {}

  ngOnInit() {
    this.response = new Response();
    const id = this.route.snapshot.params['id'];
    this.responseProcessingService.getSingleResponse(+id).then(
      (response: Response) => {
        this.response = response;
      }
    );
  }

  onBack() {
    this.router.navigate(['/responses']);
  }
}
