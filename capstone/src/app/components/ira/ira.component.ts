import { Component, OnInit } from '@angular/core';
import { IraService } from '../../services/ira.service'

@Component({
  selector: 'app-ira',
  templateUrl: './ira.component.html',
  styleUrls: ['./ira.component.scss']
})
export class IraComponent implements OnInit {
  ira!: any;
  iraFull!: any
  investments: any = [];
  transactions : any = [];
  performances : any = [];
  accountExists: boolean = false;

  displayedColumnsi: string[] = ["name", "quantity", "datePurchased", "originalValue", "currentValue"];

  displayedColumnst: string[] = ["date", "type", "amount"];

  displayedColumnsp: string[] = ["date", "change"];

  constructor(private iraService : IraService) { }

  ngOnInit(): void {
    this.getIRAFull(1);
  }

  getIRAFull(id: number){
    console.log("getIRAFull called");
    this.iraService.getIRAFull(3).subscribe((response: {}) => {
      console.log("response: ", response);
      if (Object.keys(response).length === 0){
        this.accountExists = false;
        return;
      }
      else {
        this.accountExists = true;
        this.iraFull = response;
        this.investments = this.iraFull.investments
        this.iraFull.transactions.sort(function(a : any, b : any){
          return Date.parse(b.date) - Date.parse(a.date);
        });
        this.transactions = this.iraFull.transactions;
        this.iraFull.performances.sort(function(a : any, b : any){
          return Date.parse(b.date) - Date.parse(a.date);
        });
        this.performances = this.iraFull.performances;
      }
    })
  }
}
