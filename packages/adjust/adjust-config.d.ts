export declare class AdjustConfig {
  constructor(apiKey: string, environmentSandbox: string);
  setLogLevel(logLevel);
  deactivateSKAdNetworkHandling();
  static EnvironmentSandbox;
  static EnvironmentProduction;
  static LogLevelVerbose;
  static LogLevelDebug;
  static LogLevelInfo;
  static LogLevelWarn;
  static LogLevelError;
  static LogLevelSuppress;
}
