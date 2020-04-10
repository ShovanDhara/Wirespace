import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.commonService.showHideBackBtn(false);
	}

}
