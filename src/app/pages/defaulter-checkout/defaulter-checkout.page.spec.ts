import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaulterCheckoutPage } from './defaulter-checkout.page';

describe('DefaulterCheckoutPage', () => {
  let component: DefaulterCheckoutPage;
  let fixture: ComponentFixture<DefaulterCheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaulterCheckoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaulterCheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
