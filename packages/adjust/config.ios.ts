/// <reference path="Adjust.ios.d.ts" />
import AdjustDelegateImpl from './Delegate';

export class Config {
  public _adjConfig;

  constructor(apiKey: string, environmentSandbox = ADJEnvironmentSandbox, allowSuppressLogLevel =  false) {
    const delegate = AdjustDelegateImpl.new();
    this._adjConfig = ADJConfig.new();

    if(!apiKey) {
      console.error('Please provide an api key');
      return;
    }

    if(allowSuppressLogLevel) {
      this._adjConfig.initWithAppTokenEnvironmentAllowSuppressLogLevel(apiKey, environmentSandbox, allowSuppressLogLevel);
    } else {
      this._adjConfig.initWithAppTokenEnvironment(apiKey, environmentSandbox);
    }

    this._adjConfig.setLogLevel = (logLevel) => {
      this._adjConfig.logLevel = logLevel;
    };

    this._adjConfig.delegate = delegate;
    this._adjConfig.setDeferredDeeplinkCallbackListener = (callback: any) => {
      delegate.adjustDeeplinkResponse(callback);
    };

    return this._adjConfig;
  }

  public static EnvironmentSandbox = ADJEnvironmentSandbox;
  public static EnvironmentProduction = ADJEnvironmentProduction;
  public static LogLevelVerbose = ADJLogLevelVerbose;
  public static LogLevelDebug = ADJLogLevelDebug;
  public static LogLevelInfo = ADJLogLevelInfo;
  public static LogLevelWarn = ADJLogLevelWarn;
  public static LogLevelError = ADJLogLevelError;
  public static LogLevelSuppress = ADJLogLevelSuppress;
}
