import { Config } from '@dermanostic/nativescript-adjust/config';
import { Event } from '@dermanostic/nativescript-adjust/event';

export const adjust = {
  addSessionCallbackParameter(key: string, value: string) {},
  addSessionPartnerParameter(key: string, value: string) {},
  create(config: Config) {},
  requestTrackingAuthorizationWithCompletionHandler(callback){},
  trackSubsessionStart() {},
  trackEvent(event: Event) {},
  setOfflineMode(enabled: boolean){},
  setEnabled(enabled:boolean){},
  isEnabled(callback){},
  setReferrer(referrer: string){},
  setPushToken(token: string){},
  trackAdRevenue(source: string, payload: string){},
  trackPlayStoreSubscription(subscription){},
  removeSessionCallbackParameter(key) {},
  resetSessionCallbackParameters() {},
  resetSessionPartnerParameters() {},
  gdprForgetMe() {},
  disableThirdPartySharing() {},
  getIdfa(callback) {},
  getAdid(callback) {},
  getAmazonAdId(callback) {},
  getAttribution(callback) {},
  getSdkVersion(sdkPrefix: string, callback) {},
  convertUniversalLink(url: string, scheme: string, callback) {},
  requestTrackingAuthorizationWithCompletionHandler(callback) {},
  updateConversionValue(conversionValue) {},
  getAppTrackingAuthorizationStatus(callback) {},
  trackThirdPartySharing(thirdPartySharing: com.adjust.sdk.AdjustThirdPartySharing) {},
  trackMeasurementConsent(measureConsent: boolean) {}
};
