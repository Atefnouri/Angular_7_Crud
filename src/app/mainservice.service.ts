import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class MainserviceService {
// Define API
apiURL = 'http://localhost:3000';
constructor(private http: HttpClient) { }
/*========================================
CRUD Methods for consuming RESTful API
=========================================*/
// Http Options
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}
// HttpClient API get() method => Fetch Teachers list
getTeachers(): Observable<any> {
return this.http.get<any>(this.apiURL + '/teachers')
.pipe(
retry(1),
catchError(this.handleError)
)
}


// HttpClient API post() method => Create employee
createTeacher(t:any): Observable<any> {
  return this.http.post<any>(this.apiURL + '/teachers', JSON.stringify(t), this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

  // HttpClient API delete() method => Delete employee
deleteTeacher(id:number){
  return this.http.delete<any>(this.apiURL + '/teachers/' + id, this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }

// HttpClient API get() method => Fetch Techers
getTeacher(id:number): Observable<any> {
return this.http.get<any>(this.apiURL + '/teachers/' + id)
.pipe(
retry(1),
catchError(this.handleError)
)
}

// HttpClient API put() method => Update employee
updateTeacher(id:number, employee:any): Observable<any> {
  return this.http.put<any>(this.apiURL + '/teachers/' + id, JSON.stringify(employee), this.httpOptions)
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
  }
/*
// HttpClient API put() method => Update employee
updateEmployee(id, employee): Observable<Employee> {
return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}
// HttpClient API delete() method => Delete employee
deleteEmployee(id){
return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
} */
// Error handling
handleError(error) {
let errorMessage = '';
if(error.error instanceof ErrorEvent) {
// Get client-side error
errorMessage = error.error.message;
} else {
// Get server-side error
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
window.alert(errorMessage);
return throwError(errorMessage);
}
}
