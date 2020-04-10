import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ILookup } from './../../models/lookup.interface';
import { AvailSeatDataModel } from './../../models/avail-seat-data.model';
import { AvailMapViewComponent } from './avail-map-view/avail-map-view.component';
import { CommonService } from './../../services/common.service';
import { IMyDrpOptions } from 'mydaterangepicker';
import { CommonDialogService } from './../../services/common-dialog.service';

@Component({
	selector: 'avail-space',
	templateUrl: './avail.component.html',
	styleUrls: ['./../seat-uberfication.component.css']
})
export class AvailSpaceComponent implements OnInit, AfterViewInit {

	countries: Array<ILookup>;
	cities: Array<ILookup>;
	facilities: Array<ILookup>;
	buildingBlocks: Array<ILookup>;
	floors: Array<ILookup>;
	availSeatSearchObj: AvailSeatDataModel = new AvailSeatDataModel();

	availableSpaces: Array<any> = [];
	isSearchContainerVisible = true;
	isRangeContainerVisible = false;
	isAvailSeatContainerVisible = false;
	seatDateRangePickerOptions: IMyDrpOptions;
	dateRangeModel: any = {};
	selectedBuildingDetails: any = {};

	private cityList = [
		{ value: 'CHN', name: 'Chennai', country: 'IND' },
		{ value: 'KOL', name: 'Kolkata', country: 'IND' },
		{ value: 'BLR', name: 'Bangalore', country: 'IND' }
	];

	private facilityList = [
		{ value: 'TCPX', name: 'TCPX', city: 'KOL' },
		{ value: 'GTP', name: 'GTP', city: 'KOL' },
		{ value: 'ITP', name: 'ITP', city: 'KOL' },
		{ value: 'MEPZ', name: 'MEPZ', city: 'CHN' },
		{ value: 'SIR', name: 'SIRUSERI', city: 'CHN' },
		{ value: 'ITP', name: 'ITP', city: 'BLR' },
	];

	constructor(private dialog: MatDialog, private commonService: CommonService, private router: Router, private commonDialogService: CommonDialogService) {
		this.commonService.getBackBtnClickedStatus().subscribe(data => {
			if (this.router.url === '/seat-uberfication' && data) {
				if (this.isRangeContainerVisible) {
					this.isSearchContainerVisible = true;
					this.isRangeContainerVisible = false;
					this.availSeatSearchObj = new AvailSeatDataModel();
					this.commonService.showHideBackBtn(false);
				} else {
					this.isRangeContainerVisible = true;
					this.isAvailSeatContainerVisible = false;
					this.commonService.showHideBackBtn(true);
				}
			}
		});
		this.seatDateRangePickerOptions = {
			inline: true,
			dateFormat: 'dd.mm.yyyy',
			sunHighlight: true,
			indicateInvalidDateRange: true,
			height: '34px',
			width: '260px',
			showApplyBtn: false,
			showClearBtn: false
		};
		this.availableSpaces = [
			{
				seat: 'CALTBN5M30',
				wing: 'A Wing',
				fromDate: '19-04-2018',
				toDate: '20-10-2018',
				isBooked: false
			},
			{
				seat: 'CALTBN5M35',
				wing: 'A Wing',
				fromDate: '19-04-2018',
				toDate: '20-07-2018',
				isBooked: false
			},
			{
				seat: 'CALTBN5M33',
				wing: 'A Wing',
				fromDate: '19-04-2018',
				toDate: '20-04-2018',
				isBooked: false
			}
		];
	}

	ngOnInit() {
		this.populateLookupData();
		this.commonService.showHideBackBtn(false);
		this.onChangeControl(this.availSeatSearchObj.country, 'country');
		this.onChangeControl(this.availSeatSearchObj.city, 'city');
		this.dateRangeModel = '';
	}

	ngAfterViewInit() {
		this.resetTab();
	}

	resetTab() {
		this.isRangeContainerVisible = false;
		this.isSearchContainerVisible = true;
		this.isAvailSeatContainerVisible = false;
		this.availSeatSearchObj = new AvailSeatDataModel();
	}

	onChangeControl(value: string, control: string) {
		if (control === 'country') {
			const country = value;
			this.cities = this.cityList.filter(ele => {
				return ele.country === country;
			})
		} else if (control === 'city') {
			const city = value;
			this.facilities = this.facilityList.filter(ele => {
				return ele.city === city;
			})
		}
	}

	goNext() {
		this.isRangeContainerVisible = true;
		this.isSearchContainerVisible = false;
		this.dateRangeModel = '';
		this.commonService.showHideBackBtn(true);
	}

	checkAvailableSeat() {
		this.isRangeContainerVisible = false;
		this.isAvailSeatContainerVisible = true;
		for (let i = 0; i < this.availableSpaces.length; i++) {
			this.availableSpaces[i].isBooked = false;
		}
	}

	onClickViewMap(data: any) {
		this.dialog.open(AvailMapViewComponent, {
			panelClass: 'custom-dialog',
			data: data
		});
	}

	onBookClick(space: any) {
		for (let i = 0; i < this.availableSpaces.length; i++) {
			this.availableSpaces[i].isBooked = false;
		}
		space.isBooked = !space.isBooked;
		this.commonDialogService.alert('Done', 'Request for booking seat is submitted successfully.');
	}

	private populateLookupData() {
		this.countries = [
			{ value: 'IND', name: 'India' },
			{ value: 'US', name: 'United States' }
		];

		this.buildingBlocks = [
			{ value: 'SDB 1', name: 'SDB 1' },
			{ value: 'SDB 2', name: 'SDB 2' },
			{ value: 'SDB 3', name: 'SDB 3' }
		];

		this.floors = [
			{ value: 'F1', name: 'First Floor' },
			{ value: 'F2', name: 'Second Floor' },
			{ value: 'F3', name: 'Third Floor' }
		];
	}
}
