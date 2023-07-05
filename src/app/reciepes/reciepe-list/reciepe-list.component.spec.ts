import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeListComponent } from './reciepe-list.component';

describe('ReciepeListComponent', () => {
  let component: ReciepeListComponent;
  let fixture: ComponentFixture<ReciepeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciepeListComponent]
    });
    fixture = TestBed.createComponent(ReciepeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
