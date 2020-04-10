import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ILookup } from './../models/lookup.interface';
import { SmartSpaceDataModel } from './../models/smart-space-data.model';
import { ViewOnMapComponent } from './../shared/view-on-map/view-on-map.component';
import { CommonService } from './../services/common.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
	selector: 'app-smart-space',
	templateUrl: './smart-space.component.html',
	styleUrls: ['./smart-space.component.css']
})
export class SmartSpaceComponent implements OnInit {
	@ViewChild('scanner') scannerComponent: ZXingScannerComponent;

	scannedData: string;
	scannerType = 'BookSeat';
	scannerTypeIsBooked = true;
	selectedFloor: string;

	countries: Array<ILookup>;
	cities: Array<ILookup>;
	facilities: Array<ILookup>;
	buildingBlocks: Array<ILookup>;
	smartSpaceSearchObj: SmartSpaceDataModel = new SmartSpaceDataModel();

	availableSpaces: Array<any> = [];
	isSearchContainerVisible = true;

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

	constructor(private dialog: MatDialog, private commonService: CommonService, private router: Router) {
		this.commonService.getBackBtnClickedStatus().subscribe(data => {
			if (this.router.url === '/smart-space' && data) {
				this.isSearchContainerVisible = true;
				this.smartSpaceSearchObj = new SmartSpaceDataModel();
			}
		});
	}

	ngOnInit() {
		this.populateLookupData();
		this.commonService.showHideBackBtn(false);
		this.onChangeControl(this.smartSpaceSearchObj.country, 'country');
		this.onChangeControl(this.smartSpaceSearchObj.city, 'city');
		this.availableSpaces = [
			{
				floor: '5th',
				wing: 'A',
				seats: 100
			},
			{
				floor: '6th',
				wing: 'A',
				seats: 20
			},
			{
				floor: '8th',
				wing: 'B',
				seats: 45
			}
		];
	}
	getResultToBookSeat(data: any) {
		this.scannedData = data;
		this.updateSeatNo('book');
	}
	onReleaseSeat(data: any) {
		this.selectedFloor = data;
		this.updateSeatNo('release');
	}
	onSelectTabChange($event: any): void {
		switch ($event.tab.textLabel) {
			case 'Book Seat':
				this.scannerType = 'BookSeat';
				this.scannerTypeIsBooked = true;
				break
			case 'Release Seat':
				this.scannerType = 'ReleaseSeat';
				this.scannerTypeIsBooked = false;
				break
			default:
				break;
		}
	}

	onProceedClick(data) {
		this.selectedFloor = data.floor;
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

	updateSeatNo(status) {
		switch (status) {
			case 'book':
				if (this.scannedData.length) {
					for (var i = 0; i < this.availableSpaces.length; i++) {
						if (this.availableSpaces[i].floor === this.selectedFloor) {
							const getSeatNo = this.availableSpaces[i].seats
							this.availableSpaces[i].seats = getSeatNo - 1;
							break;
						}
					}
				}
				break
			case 'release':
				for (var i = 0; i < this.availableSpaces.length; i++) {
					if (this.availableSpaces[i].floor === this.selectedFloor) {
						const getSeatNo = this.availableSpaces[i].seats
						this.availableSpaces[i].seats = getSeatNo + 1;
						break;
					}
				}
				break
			default:
				break;
		}
		return this.availableSpaces;
	}

	findSpace() {
		this.isSearchContainerVisible = false;
		this.commonService.showHideBackBtn(true);
	}

	onClickViewMap(space: any) {
		this.dialog.open(ViewOnMapComponent, {
			panelClass: 'custom-dialog',
			data: space
		});
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
	}
}
