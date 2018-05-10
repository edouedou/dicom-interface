import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/user.model';

@Injectable()
export class UserService {
  //private users: User[];
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();

  }
  constructor() { }

}
