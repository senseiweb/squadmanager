import { Observable } from 'rxjs/Observable';
import { ApplicationConfig } from './models/userConfig';
import { Injectable } from '@angular/core';
import { NotificationItem } from './models/notification';

@Injectable()
export class UserService {
  userId: number;
  userEmail: string;
  userTitle: string;
  userGroups: Array<{groupId: number, groupTitle: string}>;
  userDodId: number;
  userName: string;
  requestDigest: string;
  userNotifications: Observable<Array<NotificationItem>>;

  constructor(private _appConfig: ApplicationConfig) {
    this.init();
   }

   init(): void {

    this.userEmail = this._appConfig.userEmail;
    this.userTitle = this._appConfig.userTitle;
    this.userGroups = this._appConfig.userGroups;
    this.userNotifications = new Observable();
    this.requestDigest = this._appConfig.requestDigest;
    try {
      this.userDodId =  parseInt(/^\S+(\d{10})\S/g.exec(this._appConfig.userLoginName)[0], 2);
    } catch (e) {
      console.log(e);
      this.userDodId = undefined;
    }
   }
}
