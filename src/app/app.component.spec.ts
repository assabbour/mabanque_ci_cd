import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('dervait afficher le titre<h1>',()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bienvenue sur Ma Banque 💳')
  });

  it('devrait contenir un tableau avec trois colonnes',()=>{
    const compiled = fixture.nativeElement;
    const headers = compiled.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('Nom de la transition');
    expect(headers[1].textContent).toContain('Montant');
    expect(headers[2].textContent).toContain('Date');
  })

});
