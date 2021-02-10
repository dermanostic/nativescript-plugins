declare class ADJConfig {
  static new(): ADJConfig; // inherited from NSObject
  initWithAppTokenEnvironment(apiKey: string, environmentSandbox: string ): void;
  initWithAppTokenEnvironmentAllowSuppressLogLevel(apiKey: string, environmentSandbox: string, allowSuppressLogLevel: boolean);
  deactivateSKAdNetworkHandling(): void;
  logLevel: string;
}

declare class Adjust {
  static new(): Adjust; // inherited from NSObject
  static alloc(): Adjust // inherited from NSObject
  appDidLaunch(config: ADJConfig ): void;
  requestTrackingAuthorizationWithCompletionHandler(callback: any): void;
  addSessionCallbackParameterValue(key: string, value: string): void;
  trackSubsessionStart(): void;
  trackEvent(event: ADJEvent): void;
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
