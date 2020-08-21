import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaulterReasonPage } from './defaulter-reason.page';

describe('DefaulterReasonPage', () => {
  let component: DefaulterReasonPage;
  let fixture: ComponentFixture<DefaulterReasonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaulterReasonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaulterReasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
