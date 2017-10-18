import * as breeze from 'breeze-client';
import 'breeze-client-labs/breeze.metadata-helper';
import {Injectable} from '@angular/core';

@Injectable()
export class EntityBase {
  static myDef:  any;

   protected dt = breeze.DataType;
   entityAspect: breeze.EntityAspect;
   entityType: breeze.EntityType;
   created: Date;
   modified: Date;
   createdBy: string;
   modifiedBy: string;

   protected sName = 'Unknown';

  constructor( ) {

  }

  static addMeToStore(store: breeze.MetadataStore, helper: breeze.config.MetadataHelper): breeze.EntityType {
      return <breeze.EntityType> helper.addTypeToStore(store, this.myDef);
  }



  get $typeName(): string {
      if (!this.entityAspect) {
        return '';
      }
      return this.entityAspect.getKey().entityType.shortName;
  }

}
