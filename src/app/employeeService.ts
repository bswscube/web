import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from './app.component';
@Injectable()
export class employeeService{

	private _url: string="http://localhost:8085/api/product";
	constructor(private _http:Http){}

	getemployeeData()
	{
		return this._http.get(this._url)
		.map((response:Response)=> response.json());



	}
	geteproductData()
	{
		return this._http.get("http://localhost:8085/api/product")
		.map((response:Response)=> response.json());
		


	}
	postemployee(p_no,product_name,product_des,qty,val)
	{

		//console.log("inside of services"+p_no);
		return  this._http.post(this._url, {
			      product_no: p_no,
			      product_name: product_name,
			      product_des:product_des,
			      product_qty:qty,
			      product_price:val


		    		})

	}
}