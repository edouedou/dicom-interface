import { Injectable } from '@angular/core';

@Injectable()
export class DicomtagsService {

  //add reste des tags
  public dicomTags = {
    '00020000': 'FileMetaInfoGroupLength'

  };

  constructor() { }

}
