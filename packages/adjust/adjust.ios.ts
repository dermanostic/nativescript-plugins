const adjustClient = Adjust.new();
let callback;

adjustClient.requestTrackingAuthorizationWithCompletionHandler(status => {
  console.log(status);

  if(callback) {
    callback(status);
  }
});
export const adjust = {
    create: function(config) {
      adjustClient.appDidLaunch(config);
    },
    requestTrackingAuthorizationWithCompletionHandler: fn => {
      callback = fn
    },
    addSessionCallbackParameter: (key: string, value: string) => adjustClient.addSessionCallbackParameterValue(key, value),
    trackSubsessionStart: () => adjustClient.trackSubsessionStart(),
    trackEvent: event => adjustClient.trackEvent(event),
    appWillOpenUrl: url => adjustClient.appWillOpenUrl(NSURL.URLWithString(url)),
    getAmazonAdId: callback => callback(""),
    getGoogleAdId: callback => callback(""),
    sendFirstPackages: () => adjustClient.sendFirstPackages(),
    setOfflineMode: (enabled: boolean) => adjustClient.setOfflineMode(enabled),
    trackAdRevenue: (source: string, payload: string) => {
      const text = NSString.stringWithString(payload);
      const data: NSData = text.dataUsingEncoding(NSUTF8StringEncoding);
      adjustClient.trackAdRevenuePayload(source, data);
    },
    trackAppStoreSubscription: (subscription: ADJSubscription) => adjustClient.trackSubscription(subscription),
    removeSessionCallbackParameter: (key: string) => adjustClient.removeSessionCallbackParameter(key),
    resetSessionCallbackParameters: () => adjustClient.resetSessionCallbackParameters(),
    addSessionPartnerParameter: (key: string, value: string) => adjustClient.addSessionPartnerParameterValue(key, value),
    removeSessionPartnerParameter: (key: string) => adjustClient.removeSessionPartnerParameter(key),
    resetSessionPartnerParameters: () => adjustClient.resetSessionPartnerParameters(),
    gdprForgetMe: () => adjustClient.gdprForgetMe(),
    disableThirdPartySharing: () => adjustClient.disableThirdPartySharing(),
    updateConversionValue: (conversionValue: number) => adjustClient.updateConversionValue(conversionValue),
    getAppTrackingAuthorizationStatus: (callback) => callback(adjustClient.appTrackingAuthorizationStatus()),
    getIdfa: (callback) => callback(adjustClient.idfa),
    getAdid: (callback) => callback(adjustClient.adid),
    getSdkVersion: (sdkPrefix: string, callback) => {
      const sdkVersion = Adjust.sdkVersion;

      if(!sdkVersion) {
        callback("");
      } else {
        callback(`${sdkPrefix}@${sdkVersion}`);
      }
    },
    setReferrer: () => {},
    trackPlayStoreSubscription: () => {},
    getAttribution: (callback) => callback(adjustClient.attribution),
    convertUniversalLink: (urlString: string, scheme: string, callback) => {
      const url = NSURL.alloc().initWithString(urlString);
      callback(adjustClient.convertUniversalLinkScheme(url, scheme));
    },
    trackThirdPartySharing: (adjustThirdPartySharing: AdjustThirdPartySharing) => adjustClient.trackThirdPartySharing(adjustThirdPartySharing),
    trackMeasurementConsent: (measurementConsent: boolean) => adjustClient.trackMeasurementConsent(measurementConsent)
  };
