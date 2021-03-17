export class ThirdPartySharing {
  public thirdPartySharing;
  constructor(isEnabled: boolean | null) {
    this.thirdPartySharing = AdjustThirdPartySharing.alloc().initWithIsEnabledNumberBool(isEnabled);
    return this.thirdPartySharing;
  }
}
