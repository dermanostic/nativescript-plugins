export const adjust = {
  create: config => com.adjust.sdk.Adjust.onCreate(config),
  addSessionCallbackParameter: (key:string, value:string) => com.adjust.sdk.Adjust.addSessionCallbackParameter(key, value),
  requestTrackingAuthorizationWithCompletionHandler: (callback) => callback(""),
  trackSubsessionStart: () => com.adjust.sdk.Adjust.trackSubsessionStart,
  trackEvent: (event) => {
    if (!event.isValid()) {
      return;
    }
    com.adjust.sdk.Adjust.trackEvent(event)
  },
};
