export class Subscription {
  public subscription;
  constructor(price: string, currency: string, transactionId: string, receipt: string) {
    const decimalPrice = NSDecimalNumber.decimalNumberWithString(price);
    const text = NSString.stringWithString(receipt);
    const receiptValue = text.dataUsingEncoding(NSUTF8StringEncoding);
    this.subscription = ADJSubscription.alloc().initWithPriceCurrencyTransactionIdAndReceipt(decimalPrice, currency, transactionId, receiptValue);
    this.subscription.setSalesRegion = (salesRegion: string) => {
      this.subscription.salesRegion = salesRegion;
    };
    return this.subscription;
  }
}
