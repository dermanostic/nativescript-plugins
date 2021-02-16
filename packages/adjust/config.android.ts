import { Utils } from '@nativescript/core';

export class Config {
  public _adjConfig;

  constructor(apiKey: string, environmentSandbox = com.adjust.sdk.AdjustConfig.ENVIRONMENT_SANDBOX, allowSuppressLogLevel =  false) {

    if(!apiKey) {
      console.error('Please provide an api key');
      return;
    }

    if(allowSuppressLogLevel) {
      this._adjConfig = new com.adjust.sdk.AdjustConfig(Utils.android.getApplicationContext(), apiKey, environmentSandbox, allowSuppressLogLevel);
    } else {
      this._adjConfig = new com.adjust.sdk.AdjustConfig(Utils.android.getApplicationContext(), apiKey, environmentSandbox);
    }

    return this._adjConfig;
  }

  public static EnvironmentSandbox = com.adjust.sdk.AdjustConfig.ENVIRONMENT_SANDBOX;
  public static EnvironmentProduction = com.adjust.sdk.AdjustConfig.ENVIRONMENT_PRODUCTION;
  public static LogLevelVerbose = com.adjust.sdk.LogLevel.VERBOSE;
  public static LogLevelDebug = com.adjust.sdk.LogLevel.DEBUG;
  public static LogLevelInfo = com.adjust.sdk.LogLevel.INFO;
  public static LogLevelWarn = com.adjust.sdk.LogLevel.WARN;
  public static LogLevelError = com.adjust.sdk.LogLevel.ERROR;
  public static LogLevelSuppress = com.adjust.sdk.LogLevel.SUPRESS;
}
