import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from './../services/common.service';
import { CommonDialogService } from './../services/common-dialog.service';
import { NgForm } from '@angular/forms';
import { SeatDateModel } from './../models/seat-date.model';
import { AvailSpaceComponent } from './avail/avail.component';

@Component({
	selector: 'app-seat-uberfication',
	templateUrl: './seat-uberfication.component.html',
	styleUrls: ['./seat-uberfication.component.css']
})
export class SeatUberficationComponent implements OnInit {
	@ViewChild(AvailSpaceComponent) availSpaceComponent: AvailSpaceComponent;
	seatName = 'CALBNT5M16';
	selectedIndex = 0;
	seatAvailDateRangeObj: SeatDateModel = {
		fromDate: null,
		toDate: null
	};

	constructor(private commonService: CommonService, private commonDialogService: CommonDialogService) {
	}

	ngOnInit() {
		this.commonService.showHideBackBtn(false);
	}

	onSelectTabChange(event: any) {
		const selectedIndex = event.index;
		this.commonService.showHideBackBtn(false);
		if (selectedIndex === 1) {
			this.availSpaceComponent.resetTab();
		}

	}

	onOfferSeatClick() {
		this.commonDialogService.alert('Done', 'Seat offered successfully.');
	}
}
