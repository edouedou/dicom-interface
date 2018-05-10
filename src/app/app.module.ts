import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QueryRetrieveComponent } from './query-retrieve/query-retrieve.component';
import { PatientService} from './services/patient.service';
import { AuthComponent } from './auth/auth.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import {RouterModule, Routes} from '@angular/router';
import { AuthService} from './services/auth.service';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import { EditpatientComponent } from './editpatient/editpatient.component';
import {UserService} from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import { CEchoComponent } from './c-echo/c-echo.component';
import { WorkflowactionsComponent } from './workflowactions/workflowactions.component';
import { StudyactionsComponent } from './studyactions/studyactions.component';
import { QuerytypeComponent } from './querytype/querytype.component';
import { ResponseListComponent } from './response-list/response-list.component';
import { SingleResponseComponent } from './single-response/single-response.component';

const appRoutes: Routes = [
  { path: 'patients', canActivate: [AuthGuard], component: PatientViewComponent },
  { path: 'patients/:id', canActivate: [AuthGuard], component: PatientDetailComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditpatientComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'query', component: QueryRetrieveComponent},
  { path: 'users', component: UserListComponent},
  { path: 'querytype', component: QuerytypeComponent},
  { path: 'studyactions', component: StudyactionsComponent},
  { path: 'workflowactions', component: WorkflowactionsComponent},
  { path: 'echo', component: CEchoComponent},
  { path: 'response', component: ResponseListComponent },
  { path: 'response/view/:id', component: SingleResponseComponent },
  { path: 'new-user', component: NewUserComponent},
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    QueryRetrieveComponent,
    AuthComponent,
    PatientViewComponent,
    PatientDetailComponent,
    FourOhFourComponent,
    EditpatientComponent,
    UserListComponent,
    NewUserComponent,
    CEchoComponent,
    WorkflowactionsComponent,
    StudyactionsComponent,
    QuerytypeComponent,
    ResponseListComponent,
    SingleResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PatientService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
