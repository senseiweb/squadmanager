// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  userObject:  {resourceName: "https://cs2.eis.af.mil/sites/10918/mxg/amxs",
          appDomain: "https://cs2.eis.af.mil/sites/10918", appTitle: "Bulls Squad Manager",
          favicon: "amxs",
          requestDigest: "0x94FEB51C41206E049760366E6023EA3013228657A8AAECFC…DCD1BFA44D6297A2606E2E3B98F9E8B34DA43D329AE02E2B9",
          requestDigestIssued: "2017-10-14T13:59:57.098Z",userInfo: {
              userId: 1,
              email: "johnny.lockhart@us.af.mil",
              loginName: "i:0#.w|area52\\1065318454a",
              title: "LOCKHART, JOHNNY A MSgt USAF AFGSC 5 AMXS/MXABS",
              groups:[{
                groupId:6,
                groupTitle: "USAF EPME Technology Integration Owners"
              }]
            }
          }
};
