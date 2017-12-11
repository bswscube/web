import {Component,OnInit} from '@angular/core';
import {employeeService} from './employeeService';
import {FormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import {NgForm} from '@angular/forms';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  providers:[employeeService],
   styles: [`
    ng2-auto-complete, input {
      display: block; border: 1px solid #ccc;
    }
  `]
})

export class AppComponent implements OnInit{



//arrayOfStrings = ['this', 'is', 'list', 'of', 'string', 'element'];

  createLocation(){

    console.log("function called");
  }



  employee=[];
   product=[];
  constructor(private _employeeService:employeeService){}

   valueChanged(newVal) {
    console.log("Case 2: value is changed to ", newVal);
  }

  ngOnInit(){

    this._employeeService.getemployeeData()
    .subscribe(resEmployeeData=>this.employee=resEmployeeData);

    console.log(this.employee);

    
    this._employeeService.geteproductData()
    .subscribe(resEmployeeData=>this.product=resEmployeeData);

    console.log(this.product);

   


  }

  saveProduct(p_no,product_name,product_des,qty,val){
  	  this._employeeService.postemployee(p_no,product_name,product_des,qty,val)
   .subscribe(res => {console.log(res);},
        err => {console.log("Error occured");}
      );
   //console.log("inside of component"+this.p_no);

   alert('product recorded successfully');

  }



}

