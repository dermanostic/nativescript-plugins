import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AdjustComponent } from './adjust.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AdjustComponent }])],
	declarations: [AdjustComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AdjustModule {}
