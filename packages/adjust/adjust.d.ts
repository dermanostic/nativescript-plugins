import { Config } from '@nativescript-plugins/adjust/config';
import { Event } from '@nativescript-plugins/adjust/event';

export const adjust = {
  addSessionCallbackParameter(key: string, value: string) {},
  create(config: Config) {},
  requestTrackingAuthorizationWithCompletionHandler(callback){},
  trackSubsessionStart() {},
  trackEvent(event: Event) {},
};
