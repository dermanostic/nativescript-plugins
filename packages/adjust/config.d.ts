export declare class Config {
  constructor(apiKey: string, environmentSandbox: string, allowSuppressLogLevel?: boolean);
  setLogLevel(logLevel: string);
  static EnvironmentSandbox;
  static EnvironmentProduction;
  static LogLevelVerbose;
  static LogLevelDebug;
  static LogLevelInfo;
  static LogLevelWarn;
  static LogLevelError;
  static LogLevelSuppress;
}
