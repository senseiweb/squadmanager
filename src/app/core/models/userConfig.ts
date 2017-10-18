export class ApplicationConfig {
  userId: number;
  userEmail: string;
  userLoginName: string;
  userTitle: string;
  userGroups: Array<{groupId: number, groupTitle: string}>;
  userName: string;
  resourceName: string;
  appDomain: string;
  apptitle: string;
  requestDigest: string;
  requestDigestIssued: Date;
}

