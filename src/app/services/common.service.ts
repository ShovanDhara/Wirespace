import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {
	
	constructor() { }
	
	private backBtnVisible = new Subject<boolean>();
	private backBtnClicked = new Subject<boolean>();
 
    showHideBackBtn(param: boolean) {
        this.backBtnVisible.next(param);
    }
 
    getBackBtnStatus(): Observable<boolean> {
        return this.backBtnVisible.asObservable();
    }
	
	onClickBackBtn(param: boolean){
		this.backBtnClicked.next(param);
	}

	getBackBtnClickedStatus(): Observable<boolean> {
        return this.backBtnClicked.asObservable();
    }
}
