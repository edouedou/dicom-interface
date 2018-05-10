import { Component, OnDestroy, OnInit } from '@angular/core';
import {ResponseProcessingService} from '../services/response-processing.service';
import {Response} from '../models/response.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.scss']
})
export class ResponseListComponent implements OnInit, OnDestroy {

  responses: Response[];
  responseSubscription: Subscription;

  constructor(private router: Router, private responseProcessingService: ResponseProcessingService) { }

  ngOnInit() {
    this.responseSubscription = this.responseProcessingService.responseSubject.subscribe(
      (books: Response[]) => {
        this.responses = books;
      }
    );
    this.responseProcessingService.emitResponse();
  }

  onDeleteResponse(response: Response) {
    this.responseProcessingService.removeResponse(response);
  }

  onViewBook(id: number) {
    this.router.navigate(['/responses', 'view', id]);
  }

  ngOnDestroy() {
    this.responseSubscription.unsubscribe();
  }

}
