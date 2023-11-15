import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
//https://github.com/chelseafarley/expo-react-native-google-mobile-ads-demo/blob/main/App.js
const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-6748193739564191/5643555401";

//const adUnitId="ca-app-pub-6748193739564191/5643555401"

export const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});
export const loadInterstitial = () => {
  const unsubscribeLoaded = interstitial.addAdEventListener(
    AdEventType.LOADED,
    () => {}
  );

  const unsubscribeClosed = interstitial.addAdEventListener(
    AdEventType.CLOSED,
    () => {
      interstitial.load();
    }
  );

  interstitial.load();

  return () => {
    unsubscribeClosed();
    unsubscribeLoaded();
  };
};
