import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from './../shared/dialog/dialog.component';

@Injectable()
export class CommonDialogService {

    constructor(private dialog: MatDialog) { }

    alert(title: string, message: string) {
        const config: MatDialogConfig = {
            panelClass: ['dialog-success', 'message-dialog'],
            backdropClass: 'custom-dialog-backdrop'
        };
        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent, config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
    errorAlert(title: string, message: string) {
        const config: MatDialogConfig = {
            panelClass: ['dialog-error', 'message-dialog'],
            backdropClass: 'custom-dialog-backdrop'
        };
        let dialogRef: MatDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent, config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.isErrorAlert = true;

        return dialogRef.afterClosed();
    }

}
