import { Config } from '@nativescript-adjust/adjust/config';
import { Event } from '@nativescript-adjust/adjust/event';

export const adjust = {
  addSessionCallbackParameter(key: string, value: string) {},
  create(config: Config) {},
  requestTrackingAuthorizationWithCompletionHandler(callback){},
  trackSubsessionStart() {},
  trackEvent(event: Event) {},
};
