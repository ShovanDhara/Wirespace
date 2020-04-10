export class SmartSpaceDataModel{
	country: string;
	city: string;
	facility: string;
	buildingBlock: string;
	
	constructor(country?: string, city?: string, facility?: string, buildingBlock?: string){
		this.country = country ? country : 'IND';
		this.city = city ? city : 'KOL';
		this.facility = facility ? facility: null;
		this.buildingBlock = buildingBlock? buildingBlock : null;
	}
}