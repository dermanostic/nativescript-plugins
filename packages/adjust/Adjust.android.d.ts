declare module com {
  module adjust {
    module sdk {
        class AdjustConfig {
          constructor(own: any, apiKey:string, environmentSandbox: string, allowSuppressLogLevel?: boolean);
          setLogLevel(logLevel: string);
          static ENVIRONMENT_SANDBOX: string;
          static ENVIRONMENT_PRODUCTION: string;
        }
        class Adjust {
          static onCreate(config: com.adjust.sdk.AdjustConfig): void;
          static addSessionCallbackParameter(key, value): void;
          static trackSubsessionStart(): void;
          static trackEvent(event: com.adjust.sdk.AdjustEvent): void;
          onResume(): void;
        }
        class LogLevel {
          static VERBOSE: string;
          static DEBUG: string;
          static INFO: string;
          static WARN: string;
          static ERROR: string;
          static SUPRESS: string;
        }
        class AdjustEvent {
          constructor(eventToken: string);
          setRevenue(key: string, value: string);
          isValid(): boolean;
        }
      }
    }
}
