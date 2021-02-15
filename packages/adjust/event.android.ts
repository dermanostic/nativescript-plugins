export class Event {
  public adjEvent;

  constructor(eventToken) {
    this.adjEvent = new com.adjust.sdk.AdjustEvent(eventToken);
    return this.adjEvent;
  }
}
