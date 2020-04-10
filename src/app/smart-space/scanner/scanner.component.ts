import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { CommonDialogService } from './../../services/common-dialog.service';
import { GlobalService } from './../../services/global.service';

@Component({
    selector: 'scanner-element',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
    @ViewChild('scanner') scannerComponent: ZXingScannerComponent;
    @Output() qrResultString: EventEmitter<string> = new EventEmitter<string>();
    @Output() onReleaseSeatOutput: EventEmitter<string> = new EventEmitter<string>();

    @Input() bookedFloor: string;
    @Input() set scannerType(value: string) {
        if (value === 'BookSeat') {
            this.scannerTypeIsBooked = true;
        } else if (value === 'ReleaseSeat') {
            this.scannerTypeIsBooked = false;
        }
    };

    scannerTypeIsBooked: boolean;
    selectedValue: any;
    scanResult: string;
    bookedSeat: string;
    userBookedFloor: string;
    hasCameras = false;
    hasPermission: boolean;
    scannerEnabled = true;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

    constructor(private commonDialogService: CommonDialogService, private globalService: GlobalService) {

    }

    ngOnInit(): void {
        this.bookedSeat = this.globalService.bookedSeat;
        this.userBookedFloor = this.globalService.bookedFloor;
        this.scannerComponent.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;
            console.log('Devices: ', devices);
            this.availableDevices = devices;
            //selects the devices's back camera by default
            for (const device of devices) {
                if (/back|rear|environment/gi.test(device.label)) {
                    this.scannerComponent.changeDevice(device);
                    this.selectedDevice = device;
                    break;
                }
            }
        });

        this.scannerComponent.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });

        this.scannerComponent.permissionResponse.subscribe((answer: boolean) => {
            this.hasPermission = answer;
        });
    }

    onSelectTabChange(event: any) {

    }

    onBookOrReleaseSeat(actionType: string) {
        const type = actionType;
        const seatNo = this.scanResult;
        if (this.scanResult) {
            switch (type) {
                case 'Book':
                    if (!this.globalService.bookedSeat.length) {
                        this.commonDialogService.alert('Done', `${seatNo} is booked successfully`);
                        this.scannerTypeIsBooked = true;
                        this.globalService.bookedSeat = seatNo;
                        this.qrResultString.emit(seatNo);
                        this.bookedSeat = seatNo;
                        this.userBookedFloor = this.bookedFloor;
                        this.globalService.bookedFloor = this.bookedFloor;
                    } else {
                        this.commonDialogService.errorAlert('Alert', 'One seat is already booked by you. Please release previous seat before booking new one.');
                    }
                    break
                case 'Release':
                    // this.scannerTypeIsBooked = false;
                    // this.bookedSeat = '';
                    // this.bookedFloor = '';
                    // this.commonDialogService.alert('Done', `${seatNo} is released successfully`);
                    break
                default:
                    break;
            }
            // this.refreshView();
        }
        this.refreshView();
    }

    onReleaseSeat() {
        const seatNo = this.bookedSeat;
        this.commonDialogService.alert('Done', `${seatNo} is released successfully`);
        this.onReleaseSeatOutput.emit(this.globalService.bookedFloor);
        this.globalService.bookedSeat = '';
        this.globalService.bookedFloor = '';
        this.bookedSeat = '';
    }

    refreshView() {
        this.scanResult = '';
        //this.qrResultString.emit('');
    }
    displayCameras(event: any) {
        console.log('display camera');
    }
    handleQrCodeResult(resultString: string) {
        this.scanResult = resultString;
        //this.qrResultString.emit(resultString);
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scannerComponent.getDeviceById(selectedValue);
        this.selectedValue = selectedValue;
        this.refreshView();
    }

    onProceedClick() {

    }
}
