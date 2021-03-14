declare module com {
  module adjust {
    module sdk {
        class AdjustConfig {
          constructor(own: any, apiKey:string, environmentSandbox: string, allowSuppressLogLevel?: boolean);
          setLogLevel(logLevel: string);
          setOnDeeplinkResponseListener(callback): void;
          static ENVIRONMENT_SANDBOX: string;
          static ENVIRONMENT_PRODUCTION: string;
        }
        class Adjust {
          static onCreate(config: com.adjust.sdk.AdjustConfig): void;
          static addSessionCallbackParameter(key, value): void;
          static trackSubsessionStart(): void;
          static trackEvent(event: com.adjust.sdk.AdjustEvent): void;
          static onResume(): void;
          static getAmazonAdId(context): string;
          static getGoogleAdId(context, OnDeviceIdsRead: com.adjust.sdk.OnDeviceIdsRead.extend): void;
          static sendFirstPackages(): void;
          static setOfflineMode(enabled: boolean): void;
          static setEnabled(enabled: boolean): void;
          static isEnabled(): boolean;
          static setReferrer(referrer: string, context: android.content.Context): void;
          static setPushToken(token: string, context: android.content.Context): void;
          static appWillOpenUrl(url: android.net.Uri, context: android.content.Context): void;
          static trackAdRevenue(source: string, payload: org.json.JSONObject): void;
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
        module OnDeviceIdsRead {
          export function extend(context:any);
        }
      }
    }
}
