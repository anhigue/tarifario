import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private type = ['info', 'success', 'warning', 'danger'];

  constructor() { }

  showSuccessNotification(message: string): void {
    this.showNotification('top', 'right', this.type[1], message, 'check_circle');
  }

  showErrorNotification(message: string): void {
    this.showNotification('top', 'right', this.type[3], message, 'error');
  }

  showWarningNotification(message: string): void {
    this.showNotification('top', 'right', this.type[2], message, 'report_problem');
  }

  private showNotification(from: string, align: string, type: string, message: string, icon?: string) {
    $.notify({ message }, {
      type,
      timer: 3000,
      placement: { from, align },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">' + `${icon}` + '</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}
