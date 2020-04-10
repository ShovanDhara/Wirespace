import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'avail-map-view',
  templateUrl: './avail-map-view.component.html',
  styleUrls: ['./avail-map-view.component.css']
})
export class AvailMapViewComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<AvailMapViewComponent>, 
	@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
	}
	
	closeFloorMapModal(){
		this.dialogRef.close();
	}
}
