import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries:any=null;
  countryData:any=null;
  countryNmae:string=null;
  constructor(private trackerService:TrackerService) { }

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries(){
    this.trackerService.getCountry().subscribe(
      (country)=>{
        //console.log(country);
        this.countries= country;
      }
    )
  }
  // getLocation(){
  //   this.trackerService.getLocation().subscribe(
  //     data=>{
  //       console.log(data)
  //     }
  //   )
  // }

  onDropdownSelect(country:any){
    this.trackerService.getCountryData(country.target.value).subscribe(data=>{
      //console.log(data);
      this.countryNmae = country.target.value;
      this.countryData=data;
    })

  }

}
