import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-view-on-map',
  templateUrl: './view-on-map.component.html',
  styleUrls: ['./view-on-map.component.css']
})
export class ViewOnMapComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<ViewOnMapComponent>, 
	@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
	}
	
	closeFloorMapModal(){
		this.dialogRef.close();
	}
}
