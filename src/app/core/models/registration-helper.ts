import { MetadataCT } from './metadata';
import { Personnel } from './personnel';
import * as breeze from 'breeze-client';
import 'breeze-client-labs/breeze.metadata-helper';
import {Injectable} from '@angular/core';

@Injectable()
export class RegistrationHelper {

  constructor() {  }

  addDefaultSelect(et: breeze.EntityType & breeze.config.EntityTypeDef): void {
    let custom = <any>et.custom;

    if (custom && custom.defaultSelect != null) {
      return;
    }

    const select = [];

    et.dataProperties.forEach(prop => {
      if (!prop.isUnmapped) {
        select.push(prop);
      }
    });

    if (select.length) {
      if (!custom) {
        et.custom = custom = {};
      } else {
        custom.defaultSelect = select.join(',');
      }
    }
  }

  register(store: breeze.MetadataStore, _helper: breeze.config.MetadataHelper) {
    Personnel.addMeToStore(store, _helper);
    MetadataCT.addMeToStore(store, _helper);
    store.registerEntityTypeCtor(Personnel.sName, Personnel, Personnel.initializer);
  }


}
