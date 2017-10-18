import { max } from 'rxjs/operator/max';
import { Data } from '@angular/router';
import { EntityBase } from './entity-base';
import * as breeze from 'breeze-client';

import { Injectable } from '@angular/core';

@Injectable()
export class MetadataCT extends EntityBase {
  static sName: 'Metadata';
  static myDef =  {
    shortName: 'Metadata',
    isComplexType: true,
    dataProperties: {
      etag: {

      },
      id: {

      },
      type: {

      },
      url: {

      }
    }
  };

  etag: string;
  id: string;
  type: string;
  url: string;

  constructor() {
    super();
  }
  static initializer(entity: MetadataCT) { }
}
