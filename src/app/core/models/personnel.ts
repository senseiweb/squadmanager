import { MetadataCT } from './metadata';
import { max } from 'rxjs/operator/max';
import { Data } from '@angular/router';
import { EntityBase } from './entity-base';
import * as breeze from 'breeze-client';
import { Injectable } from '@angular/core';

@Injectable()
export class Personnel extends EntityBase {
  static sName = 'Personnel';
  static myDef = {
    shortName: Personnel.sName,
    defaultResourceName: 'lists/getbytitle(\'Personnel\')/items',
    dataProperties: {
      Id: {
        type: breeze.DataType.Int32

      },
      LastName: {
        isNullable: false,
        max: 255
      },
      FirstName: {
        isNullable: false,
        max: 255
      },
      OfficeSymbolId: {
        type: breeze.DataType.Int32
      },
      IdentityId: {
        type: breeze.DataType.Int32
      },
      Created: {
        type: breeze.DataType.DateTime
      },
      OData_Comments: {

      },
      __metadata: {
        complexTypeName: 'Metadata:#NSP.Squad.Mgr', isNullable: false
      }
    }
  };

  lastName: string;
  firstName: string;
  grade: string;
  officeSymbolID: string;
  dor: Date;
  das: Date;
  dafsc: string;
  cafsc: string;
  TAFMSD: Date;
  dos: Date;
  ets: Date;
  homeAddress: string;
  maritalStatus: string;
  officeSymbolId: number;
  dob: Date;
  recMatchCode: string;
  __metadata: MetadataCT;
  /**
   *
   */
  constructor() { super(); }
  static initializer(entity: Personnel) { }

}
