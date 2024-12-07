import { TestBed } from '@angular/core/testing';
import { TransactionsService } from './transactions.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { transition } from '@angular/animations';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[TransactionsService]
    });
    service = TestBed.inject(TransactionsService);
    httpMock = TestBed.inject(HttpTestingController)
  });

 
  afterEach(()=>{
    httpMock.verify();
  })


  it('devrait faire une requete GET et retourner des données', ()=>{
    const mockTransactions = [
        {name:"Paiement", amount:-50, date:"2024-12-01"},
        {name : "Salaire", amount:1500, date:"2024-12-05"}
    ]

    service.getTransactins().subscribe((transactions)=>{
        expect(transactions.length).toBe(2);
        expect(transactions).toEqual(mockTransactions);
    });

    const req = httpMock.expectOne('http://localhost:3000/transactions');
    expect(req.request.method).toBe('GET');

    req.flush(mockTransactions);

  })


});
