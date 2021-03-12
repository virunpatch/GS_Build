import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slideopp1Page } from './slideopp1.page';

describe('Slideopp1Page', () => {
  let component: Slideopp1Page;
  let fixture: ComponentFixture<Slideopp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slideopp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slideopp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
