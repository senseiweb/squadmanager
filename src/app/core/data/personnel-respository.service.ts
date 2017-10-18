import { Personnel } from './../models/personnel';
import { EmProviderService } from './em-provider.service';
import { BaseRepository } from './base-repository.service';
import { Injectable } from '@angular/core';
import * as breeze from 'breeze-client';

@Injectable()
export class PersonnelRepoService extends BaseRepository<Personnel> {

  constructor(private _emProvider: EmProviderService) {
    super(_emProvider.entityManager, Personnel.sName,Personnel.myDef.defaultResourceName);
   }
}
