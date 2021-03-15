/// <reference path="Adjust.android.d.ts" />

import { Utils } from '@nativescript/core';

export const adjust = {
    create: config => {
      com.adjust.sdk.Adjust.onCreate(config);
      com.adjust.sdk.Adjust.onResume();
    },
    addSessionCallbackParameter: (key: string, value: string) => com.adjust.sdk.Adjust.addSessionCallbackParameter(key, value),
    addSessionPartnerParameter: (key: string, value: string) => com.adjust.sdk.Adjust.addSessionPartnerParameter(key, value),
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
      com.adjust.sdk.Adjust.getGoogleAdId(Utils.android.getApplicationContext(), new (com.adjust.sdk.OnDeviceIdsRead as any).extend({
        init(): void {
          return global.__native(this);
        },

        onGoogleAdIdRead(googleAdId: string): void {
          callback(googleAdId)
        }
      }))
    },
    sendFirstPackages: () => com.adjust.sdk.Adjust.sendFirstPackages(),
    setOfflineMode: (enabled: boolean) => com.adjust.sdk.Adjust.setOfflineMode(enabled),
    setEnabled: (enabled: boolean) => com.adjust.sdk.Adjust.setEnabled(enabled),
    isEnabled: (callback) => callback(com.adjust.sdk.Adjust.isEnabled()),
    setReferrer: (referrer: string) => com.adjust.sdk.Adjust.setReferrer(referrer, Utils.android.getApplicationContext()),
    setPushToken: (token: string) => com.adjust.sdk.Adjust.setPushToken(token, Utils.android.getApplicationContext()),
    appWillOpenUrl: (strUrl) => com.adjust.sdk.Adjust.appWillOpenUrl(android.net.Uri.parse(strUrl), Utils.android.getApplicationContext()),
    trackAdRevenue: (source: string, payload: string) => {
      try {
        com.adjust.sdk.Adjust.trackAdRevenue(source, new org.json.JSONObject(payload));
      } catch (e: unknown) {
        console.error('Give ad revenue payload is not a valid JSON string');
      }
    },
    trackPlayStoreSubscription: (subscription: com.adjust.sdk.AdjustPlayStoreSubscription) =>com.adjust.sdk.Adjust.trackPlayStoreSubscription(subscription),
    removeSessionCallbackParameter: (key:string) => com.adjust.sdk.Adjust.removeSessionCallbackParameter(key),
    removeSessionPartnerParameter: (key:string) => com.adjust.sdk.Adjust.removeSessionPartnerParameter(key),
    resetSessionCallbackParameters: () => com.adjust.sdk.Adjust.resetSessionCallbackParameters(),
    resetSessionPartnerParameters: () => com.adjust.sdk.Adjust.resetSessionPartnerParameters(),
    gdprForgetMe: () => com.adjust.sdk.Adjust.gdprForgetMe(Utils.android.getApplicationContext()),
    disableThirdPartySharing: () => com.adjust.sdk.Adjust.disableThirdPartySharing(Utils.android.getApplicationContext()),
    getIdfa: (callback) => callback(""),
    getAdid: (callback) => callback(com.adjust.sdk.Adjust.getAdid()),
    getAmazonAdId: (callback) => callback(com.adjust.sdk.Adjust.getAmazonAdId(Utils.android.getApplicationContext())),
    getAttribution: (callback) => callback(JSON.parse(com.adjust.sdk.Adjust.getAttribution())),
    getSdkVersion: (sdkPrefix: string, callback) => {
      const sdkVersion: string = com.adjust.sdk.Adjust.getSdkVersion();

      if(!sdkVersion) {
        callback("");
      } else {
        callback(`${sdkPrefix}@${sdkVersion}`);
      }
    },
    convertUniversalLink: (url: string, schema: string, callback) => callback(""),
    requestTrackingAuthorizationWithCompletionHandler: (callback) => callback(""),
    updateConversionValue: () => {},
    getAppTrackingAuthorizationStatus: (callback) => callback("-1"),
    trackThirdPartySharing: (thirdPartySharing: com.adjust.sdk.AdjustThirdPartySharing) => com.adjust.sdk.Adjust.trackThirdPartySharing(thirdPartySharing),
    trackMeasurementConsent: (measureConsent: boolean) => com.adjust.sdk.Adjust.trackMeasurementConsent(measureConsent)
};
