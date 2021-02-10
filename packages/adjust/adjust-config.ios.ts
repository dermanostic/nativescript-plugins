export class AdjustConfig {
  public _adjConfig;

  constructor(apiKey: string, environmentSandbox = ADJEnvironmentSandbox, allowSuppressLogLevel =  false) {
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
