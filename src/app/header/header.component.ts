import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	isBackBtnVisible = false;
	
	constructor(private commonService: CommonService) { 
		this.commonService.getBackBtnStatus().subscribe(data => {
			this.isBackBtnVisible = data;
		});
	}

	ngOnInit() {
	}
	
	onClickBackBtn(){
		this.isBackBtnVisible = false;
		this.commonService.onClickBackBtn(true);
	}

}
