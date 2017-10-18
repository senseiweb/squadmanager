<!doctype html>
<%@ Page language="C#" %>
  <%@ Register Tagprefix="SharePoint"
     Namespace="Microsoft.SharePoint.WebControls"
     Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
    <%@ Import Namespace="Microsoft.SharePoint" %>
      <html lang="en">
      <head>
        <SharePoint:ScriptLink Name="MicrosoftAjax.js" runat="server" Defer="False" Localizable="false" />
        <SharePoint:ScriptLink Name="SP.core.js" runat="server" Defer="False" Localizable="false" />
        <SharePoint:ScriptLink Name="SP.js" runat="server" Defer="True" Localizable="false" />
        <meta charset="utf-8">
        <title>App Launcher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          .ms-core-pageTitle,
.ms-core-pageTitle a
{
/* [ReplaceFont(themeFont:"title")] */ font-family:"Segoe UI Light","Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
/* [ReplaceColor(themeColor:"SiteTitle")] */ color:#262626;
}
.ms-core-pageTitle
{
font-size:2.77em;
white-space:nowrap;
}
.ms-core-pageTitle a:hover,
.ms-core-pageTitle a:active
{
text-decoration:none;
}
          .ms-dlgOverlay {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background-color: #999;
            display: none;
          }

          .ms-core-needIEFilter .ms-dlgOverlay {
            filter: alpha(opacity=50);
            -ms-filter: "alpha(opacity=50)";
          }

          .ms-dlgFrameContainer {
            padding: 0px 19px 10px;
            overflow: auto;
          }

          .ms-dlgTitle {
            padding: 13px 19px 15px;
            white-space: nowrap;
            cursor: move;
            overflow: hidden;
          }

          .ms-dlgFrameContainerNoPadding {
            padding: 0px;
            overflow: auto;
          }

          .ms-dlgTitleNoPadding {
            padding: 0px;
            white-space: nowrap;
            cursor: move;
            overflow: hidden;
          }

          .ms-dlgFrame {
            width: 100%;
            height: 100%;
            border: none;
          }

          .ms-dlgContent {
            /* [ReplaceColor(themeColor:"SubtleLines")] */
            border: 1px solid #c6c6c6;
            position: absolute;
            /* [ReplaceColor(themeColor:"BackgroundOverlay",opacity:"1.0")] */
            background-color: #fff;
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.47);
          }

          .ms-dlgContentNoBorder {
            border: 0px;
            position: absolute;
            /* [ReplaceColor(themeColor:"BackgroundOverlay",opacity:"1.0")] */
            background-color: #fff;
            box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.47);
          }

          .ms-dlg-heading,
          h2.ms-dlg-heading {
            /* [ReplaceFont(themeFont:"heading")] */
            font-family: "Segoe UI Semilight", "Segoe UI", "Segoe", Tahoma, Helvetica, Arial, sans-serif;
            font-size: 1.46em;
            /* [ReplaceColor(themeColor:"WebPartHeading")] */
            color: #444;
          }

          .ms-dlgTitleText {
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .ms-dlgContent>.ms-dlgBorder>.ms-dlgTitle>.ms-dlgCloseBtn>.s4-clust {
            height: 16px !important;
            width: 16px !important;
          }

          .ms-dlgTitleBtns {
            margin-top: -10px;
            margin-right: -18px;
            height: 30px;
            float: right;
          }

          .ms-dlgCloseBtn>span {
            cursor: pointer;
            border: 1px solid transparent;
          }

          .ms-dlgErrItem {
            display: inline;
            padding-right: 10px;
          }

          .ms-dlgLoadingTextDiv {
            padding: 0px 0px 16px;
            white-space: nowrap;
          }

          .ms-dlgLoadingText {
            text-align: left;
            padding-left: 3px;
            width: 100%;
          }

          .ms-dialog body {
            /* [ReplaceColor(themeColor:"BackgroundOverlay",opacity:"1.0")] */
            background-color: #fff;
          }

          .ms-dialog .ms-fullscreenmode #contentBox {
            margin-left: 0px;
          }

          .ms-dialog #ms-loading-body {
            padding-top: 0px;
          }

          .ms-dialog #ms-loading-box {
            border-width: 0px;
          }

          .ms-visibilityHidden {
            visibility: hidden;
          }

          .ms-accessible,
          .ms-hidden,
          a.ms-skip,
          a:hover.ms-skip,
          a:visited.ms-skip,
          a.ms-TurnOnAcc,
          a.ms-SkiptoMainContent,
          a.ms-SkiptoNavigation {
            position: absolute;
            top: -2000px;
            overflow: hidden;
            height: 1px;
            width: 1px;
            display: block;
          }

          .ms-accentText,
          .ms-accentText:visited {
            /* [ReplaceColor(themeColor:"AccentText")] */
            color: #0072c6;
          }

          .ms-alignCenter {
            text-align: center;
          }

          .ms-textXLarge {
            /* [ReplaceFont(themeFont:"large-body")] */
            font-family: "Segoe UI Semilight", "Segoe UI", "Segoe", Tahoma, Helvetica, Arial, sans-serif;
            font-size: 1.46em;
          }

          .ms-textLarge {
            /* [ReplaceFont(themeFont:"large-body")] */
            font-family: "Segoe UI Semilight", "Segoe UI", "Segoe", Tahoma, Helvetica, Arial, sans-serif;
            font-size: 1.15em;
          }
        </style>
      </head>

      <body>
        <form runat="server">
          <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
        </form>
        <script>
          (function () {
            SP.UI.ModalDialog.showWaitScreenWithNoClose("Starting...", "Getting user data and redirecting to the app!");
            var appConfig = {};
            appConfig.resourceName = _spPageContextInfo.webAbsoluteUrl;
            appConfig.appDomain = _spPageContextInfo.siteAbsoluteUrl;
            var rd = "";
            var rdIssued = null;
            //Configure based on environment
              appConfig.appTitle = "Bulls Squad Manager";
              appConfig.favicon = "amxs";
            //End Environment Config
            try {
              var raw = document.querySelector("#__REQUESTDIGEST").value.split(",")
              appConfig.requestDigest = raw[0];
              appConfig.requestDigestIssued = new Date();
            }
            catch (e) {
              console.log("Critical Error: unable to find the appropriate request digest--> " + e);
            };

            try {
              var appWebUrl = window.location.protocol + "//" + window.location.host
                + _spPageContextInfo.webServerRelativeUrl
              var clientCtx = new SP.ClientContext(appWebUrl);
              var oWeb = clientCtx.get_web();
              var oUser = oWeb.get_currentUser();
              appConfig.userRequestData = rd;
              oUser.retrieve();
              var groups = oUser.get_groups();
              clientCtx.load(oWeb);
              clientCtx.load(groups);
              clientCtx.executeQueryAsync(function () {
                var rUser = oWeb.get_currentUser();;
                var tempUser = {};
                tempUser.userId = rUser.get_id();
                tempUser.email = rUser.get_email();
                tempUser.loginName = rUser.get_loginName();
                tempUser.title = rUser.get_title();
                tempUser.groups = [];
                var grpEnum = groups.getEnumerator();
                var i = 0;
                while (grpEnum.moveNext()) {
                  var group = grpEnum.get_current();
                  tempUser.groups[i] = {
                    title: group.get_title(),
                    id: group.get_id()
                  }
                  i += 1;
                }
                appConfig.userInfo = tempUser;
                localStorage.setItem('AppConfig', JSON.stringify(appConfig));
                alert("about to change page!!!");
                window.location = _spPageContextInfo.siteAbsoluteUrl + '/sitepages/app.html';

              }, function (error) {
                console.log(error);
              })
            } catch (e) {
              console.log("Critical Error: failed to get data from the server--> " + e);
            }
          })();
        </script>
      </body>

      </html>
