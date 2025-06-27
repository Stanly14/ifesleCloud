import { ApplicationRef, createComponent, Injectable, Injector } from '@angular/core';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationServiceService {

  constructor(private appRef: ApplicationRef, private injector: Injector) { }

  open(title: string, message: string): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = createComponent(ConfirmationDialogComponent, {
        environmentInjector: this.appRef.injector,
        elementInjector: this.injector
      });

      dialogRef.instance.title = title;
      dialogRef.instance.message = message;

      dialogRef.instance.confirmed.subscribe((result: boolean) => {
        resolve(result);
        this.appRef.detachView(dialogRef.hostView);
        dialogRef.destroy();
      });

      this.appRef.attachView(dialogRef.hostView);
      document.body.appendChild(dialogRef.location.nativeElement);
    });
  }
}
