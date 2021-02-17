import { Component, NgZone } from '@angular/core';
import { DemoSharedAdjust } from '@demo/shared';
import {} from '@nativescript-plugins/adjust';

@Component({
	selector: 'demo-adjust',
	templateUrl: 'adjust.component.html',
})
export class AdjustComponent {
	demoShared: DemoSharedAdjust;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAdjust();
	}
}
