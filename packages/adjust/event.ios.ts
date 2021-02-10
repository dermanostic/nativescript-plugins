export class Event {
  public adjEvent;

  constructor(eventToken) {
    this.adjEvent = ADJEvent.new();
    this.adjEvent.initWithEventToken(eventToken);
    this.adjEvent.setRevenue = (revenue, currency) => {
      this.adjEvent.setRevenueCurrency(revenue, currency);
    };
    return this.adjEvent;
  }
}
