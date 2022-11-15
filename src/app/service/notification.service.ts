import { Injectable } from '@angular/core';
// ngx taster
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService

  ) { }

  // show sucsess
  showSuccess(message: any, title: any) {
    this.toastr.success(message, title);
    }
  // show Error
  showError(message: any, title: any) {
    this.toastr.error(message, title);
   }
  //Show Info
  showInfo(message: any, title: any) {
    this.toastr.info(message, title);

    }
  // SHow Warning  
  showWarning(message: any, title: any) {
    this.toastr.warning(message, title);

  }
}
