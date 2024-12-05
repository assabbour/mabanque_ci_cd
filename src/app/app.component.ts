import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionsService } from './transactions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  transactions: any[] = [];
  constructor(private transactionsService : TransactionsService){

  }

  ngOnInit():void{
    this.transactionsService.getTransactins().subscribe((data:any[])=>{
      this.transactions = data;
      console.log(this.transactions);
      
    })
  }


}
