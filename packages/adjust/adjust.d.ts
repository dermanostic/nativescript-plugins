import { AdjustConfig } from '@nativescript-adjust/adjust/adjust-config';
import { Event } from '@nativescript-adjust/adjust/event';

export const adjust = {
  addSessionCallbackParameter(key: string, value: string) {},
  create(config: AdjustConfig) {},
  requestTrackingAuthorizationWithCompletionHandler(callback){},
  trackSubsessionStart() {},
  trackEvent(event: Event) {},
};
