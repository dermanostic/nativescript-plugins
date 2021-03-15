/// <reference path="Adjust.android.d.ts" />

export class ThirdPartySharing {
  public thirdPartySharing;
  constructor(isEnabled: boolean | null) {
    this.thirdPartySharing = new com.adjust.sdk.AdjustThirdPartySharing(isEnabled);
    return this.thirdPartySharing;
  }
}
