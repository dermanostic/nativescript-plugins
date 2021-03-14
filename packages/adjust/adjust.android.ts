/// <reference path="Adjust.android.d.ts" />

import { Utils } from '@nativescript/core';

export const adjust = {
  create: config => {
    com.adjust.sdk.Adjust.onCreate(config);
    com.adjust.sdk.Adjust.onResume();
  },
  addSessionCallbackParameter: (key:string, value:string) => com.adjust.sdk.Adjust.addSessionCallbackParameter(key, value),
  requestTrackingAuthorizationWithCompletionHandler: (callback) => callback(""),
  trackSubsessionStart: () => com.adjust.sdk.Adjust.trackSubsessionStart,
  trackEvent: (event) => {
    if (!event.isValid()) {
      return;
    }
    com.adjust.sdk.Adjust.trackEvent(event);
  },
  getAmazonAdId: (callback) => {
    callback(com.adjust.sdk.Adjust.getAmazonAdId(Utils.android.getApplicationContext()));
  },
  getGoogleAdId: (callback) => {
    com.adjust.sdk.Adjust.getGoogleAdId(Utils.android.getApplicationContext(), new com.adjust.sdk.OnDeviceIdsRead.extend({
      init():void {
        return global.__native(this);
      },

      onGoogleAdIdRead(googleAdId: string): void {
        callback(googleAdId)
      }
    }))
  },
  sendFirstPackages:() => com.adjust.sdk.Adjust.sendFirstPackages(),
  setOfflineMode: (enabled: boolean) => com.adjust.sdk.Adjust.setOfflineMode(enabled)
};
