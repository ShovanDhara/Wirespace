import { MatDialogRef } from '@angular/material';
import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: 'dialog.component.html'
})

export class ConfirmDialogComponent {
    public isErrorAlert = false;
    public title: string;
    public message: string;

    public userInput: EventEmitter<boolean> = new EventEmitter();

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}