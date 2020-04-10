export class AvailSeatDataModel {
	country: string;
	city: string;
	facility: string;
	buildingBlock: string;
	floor: string;
	
	constructor(country?: string, city?: string, facility?: string, buildingBlock?: string, floor?: string, begineDate?: Date, endDate?: Date, dateRange?: any) {
		this.country = country ? country : 'IND';
		this.city = city ? city : 'KOL';
		this.facility = facility ? facility : null;
		this.buildingBlock = buildingBlock ? buildingBlock : null;
		this.floor = floor ? floor : null;
	}
}