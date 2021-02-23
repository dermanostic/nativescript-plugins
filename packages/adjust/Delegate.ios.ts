export default class AdjustDelegateImpl
  extends NSObject
  implements AdjustDelegate {

  static ObjCProtocols = [AdjustDelegate];

  static new(): AdjustDelegateImpl {
    return <AdjustDelegateImpl>super.new();
  }

  adjustDeeplinkResponse(path: URL) {
    return path;
  }
}
