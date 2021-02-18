import { Config } from '@dermanostic/nativescript-adjust/config';
import { Event } from '@dermanostic/nativescript-adjust/event';

export const adjust = {
  addSessionCallbackParameter(key: string, value: string) {},
  create(config: Config) {},
  requestTrackingAuthorizationWithCompletionHandler(callback){},
  trackSubsessionStart() {},
  trackEvent(event: Event) {},
};
