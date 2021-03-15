/// <reference path="Adjust.android.d.ts" />

export class Subscription {
  public subscription;
  constructor(price: string, currency: string, sku: string, orderId: string, signature: string, purchaseToken: string) {
    let lPrice = java.lang.Long.parseLong(price);
    this.subscription = new com.adjust.sdk.AdjustPlayStoreSubscription(lPrice, currency, sku, orderId, signature, purchaseToken);
    return this.subscription;
  }
}
