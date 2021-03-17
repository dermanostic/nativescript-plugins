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
      const data = text.dataUsingEncoding(NSUTF8StringEncoding);
      adjustClient.trackAdRevenuePayload(source, payload);
    },
    trackAppStoreSubscription: (subscription: ADJSubscription) => adjustClient.trackSubscription(subscription),
    removeSessionCallbackParameter: (key: string) => adjustClient.removeSessionCallbackParameter(key),
    resetSessionCallbackParameters: () => adjustClient.resetSessionCallbackParameters(),
  };
