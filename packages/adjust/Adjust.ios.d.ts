declare class ADJConfig {
  static new(): ADJConfig; // inherited from NSObject
  initWithAppTokenEnvironment(apiKey: string, environmentSandbox: string ): void;
  initWithAppTokenEnvironmentAllowSuppressLogLevel(apiKey: string, environmentSandbox: string, allowSuppressLogLevel: boolean);
  deactivateSKAdNetworkHandling(): void;
  logLevel: string;
  delegate: AdjustDelegate;
}

declare class Adjust {
  static new(): Adjust; // inherited from NSObject
  static alloc(): Adjust // inherited from NSObject
  appDidLaunch(config: ADJConfig ): void;
  requestTrackingAuthorizationWithCompletionHandler(callback: any): void;
  addSessionCallbackParameterValue(key: string, value: string): void;
  trackSubsessionStart(): void;
  trackEvent(event: ADJEvent): void;
  appWillOpenUrl(url: NSURL): void;
  sendFirstPackages(): void;
  setOfflineMode(isEnabled: boolean): void;
  trackAdRevenuePayload(source: string, payload: NSData): void;
  trackSubscription(subscription: ADJSubscription): void;
  removeSessionCallbackParameter(key: string): void;
  resetSessionCallbackParameters(): void;
  addSessionPartnerParameterValue(key: string, value: string): void;
  removeSessionPartnerParameter(key: string): void;
  resetSessionPartnerParameters(): void;
  gdprForgetMe(): void;
  disableThirdPartySharing(): void;
  updateConversionValue(conversionValue: number) : void;
  appTrackingAuthorizationStatus(): void;
  idfa: string | null;
  adid: string | null;
  attribution: NSMutableDictionary;
  static sdkVersion: number;
  convertUniversalLinkScheme(url: NSURL, scheme: string): void;
  trackThirdPartySharing(adjustThirdPartySharing: AdjustThirdPartySharing): void;
  trackMeasurementConsent(measurementConsent: boolean): void;
}

declare class ADJEvent {
  static new(): ADJEvent; // inherited from NSObject
  initWithEventToken(token: string): void;
  setRevenueCurrency(revenue, currency): void;
}

declare var ADJEnvironmentSandbox: string;
declare var ADJEnvironmentProduction: string;
declare var ADJLogLevelVerbose: string;
declare var ADJLogLevelDebug: string;
declare var ADJLogLevelInfo: string;
declare var ADJLogLevelWarn: string;
declare var ADJLogLevelError: string;
declare var ADJLogLevelAssert: string;
declare var ADJLogLevelSuppress: string;

declare class AdjustDelegate {
  adjustDeeplinkResponse(url: URL): void;
}

declare class ADJSubscription {
  static alloc(): ADJSubscription;
  initWithPriceCurrencyTransactionIdAndReceipt(decimalPrice: NSDecimalNumber, currency: string, transactionId: string, receiptValue: NSUTF8StringEncoding): ADJSubscription;
  salesRegion: string;
}

declare class AdjustThirdPartySharing {
  static alloc(): AdjustThirdPartySharing;
  initWithIsEnabledNumberBool(isEnabled: boolean): AdjustThirdPartySharing;
}
