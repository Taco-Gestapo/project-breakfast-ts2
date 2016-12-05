/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientDocumentService } from './client-document.service';

describe('ClientDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientDocumentService]
    });
  });

  it('should ...', inject([ClientDocumentService], (service: ClientDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
