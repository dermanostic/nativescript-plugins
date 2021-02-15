import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAdjust } from '@demo/shared';
import { AdjustConfig, Adjust, AdjustEvent } from '@nativescript-adjust/adjust';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
  const adjustConfig = new AdjustConfig("agr7cpd5h8g0", AdjustConfig.EnvironmentSandbox);
  adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

  Adjust.addSessionCallbackParameter("scpk1", "scpv1");
  Adjust.addSessionCallbackParameter("scpk2", "scpv2");

  Adjust.requestTrackingAuthorizationWithCompletionHandler((status) => {
    console.log("Authorization status update");
    console.log(status)
  });
  Adjust.create(adjustConfig);
  Adjust.trackSubsessionStart();

  const adjustEvent = new AdjustEvent("gv2wpy");
  adjustEvent.setRevenue(10.0, 'USD');

  Adjust.trackEvent(adjustEvent);

  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAdjust {}
