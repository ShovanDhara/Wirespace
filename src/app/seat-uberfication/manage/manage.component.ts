import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDialogService } from './../../services/common-dialog.service';

@Component({
	selector: 'manage-space',
	templateUrl: './manage.component.html',
	styleUrls: ['./../seat-uberfication.component.css']
})
export class ManageSpaceComponent implements OnInit {
	totalRequestNo: number = 6;
	myRequest: number = 1;
	approvals: Array<any> = [];
	requests: Array<any> = [];

	constructor(private router: Router, private commonDialogService: CommonDialogService) {
		this.approvals = [
			{
				name: 'Apurba Chatterjee',
				aid: 32124,
				fromDate: '19-04-2018',
				toDate: '20-10-2018',
				isApproved: false
			},
			{
				name: 'Malay Das',
				aid: 345847,
				fromDate: '19-04-2018',
				toDate: '20-10-2018',
				isApproved: false
			}
		];

		this.requests = [
			{
				seat: 'CALTBN5M30',
				wing: 'A Wing',
				fromDate: '19-04-2018',
				toDate: '20-10-2018',
				status: 'Pending'
			}
		];
	}

	ngOnInit() {

	}

	onClickApprove(){
		this.commonDialogService.alert('Done', 'The request has been approved.');
	}
}
