import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAdjust } from '@demo/shared';
import {} from '@nativescript-adjust/adjust';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAdjust {}
