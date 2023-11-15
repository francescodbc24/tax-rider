import { FunctionComponent } from "react";
import {
    BannerAd,
    BannerAdSize,
    TestIds,
  } from "react-native-google-mobile-ads";
  
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-6748193739564191/5288192562";

    //const adUnitId="ca-app-pub-6748193739564191/5288192562";
interface BannerAddProps {
    
}
 
const BannerAdd: FunctionComponent<BannerAddProps> = () => {
    return ( 
        <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.LARGE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
     );
}
 
export default BannerAdd;