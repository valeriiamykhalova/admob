/**
 *
 * AdmobBanner
 *
 */

import React, {Component, Fragment} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import NativeAdView, {
  AdBadge,
  AdvertiserView,
  CallToActionView,
  HeadlineView,
  IconView,
} from 'react-native-admob-native-ads';

export default class AdmobBanner extends Component {
  // static contextType = AdmobUnitIdsContext;

  constructor(props, context) {
    super(props);

    // this.unitId = get(context, [AdmobAdTypes.BANNER, props.placement]);

    this.state = {
      adData: null,
      shouldMount: true,
    };
  }

  render() {
    const {adData} = this.state;

    return (
      <View style={styles.container}>
        <NativeAdView
          adUnitID="ca-app-pub-3940256099942544/2247696110"
          onUnifiedNativeAdLoaded={this._onUnifiedNativeAdLoaded}
          onAdFailedToLoad={this._onAdFailedToLoad}
          onAdImpression={this._onAdImpression}>
          <View style={styles.contentContainer}>
            <AdBadge
              style={styles.adBadge}
              textStyle={styles.adBadgeText}
              allCaps
            />

            <View style={styles.iconContainer}>
              <IconView style={styles.icon} />
            </View>

            <View style={styles.content}>
              <HeadlineView numberOfLines={2} style={styles.headline} />

              <AdvertiserView numberOfLines={1} style={styles.advertiser} />

              <View style={styles.footerContainer}>
                <View style={styles.ratingContainer}>
                  {adData?.rating ? (
                    <Fragment>
                      <Text style={styles.ratingNumber}>{adData?.rating}</Text>
                    </Fragment>
                  ) : null}
                </View>

                <CallToActionView
                  style={styles.button}
                  textStyle={styles.buttonText}
                />
              </View>
            </View>
          </View>
        </NativeAdView>
      </View>
    );
  }

  _onUnifiedNativeAdLoaded = (adData) => {
    console.info(`[ADMOB][AdmobBanner] Ad loaded. ${this.props.placement}`);

    this.setState({adData});
  };

  _onAdFailedToLoad = (event) =>
    console.info(
      '[ERROR][ADMOB][AdmobBanner] Ad failed to load: ',
      event.nativeEvent,
    );

  _onAdImpression = () => {
    console.info(`[ADMOB][AdmobBanner] Ad impression. ${this.props.placement}`);
  };
}

const styles = StyleSheet.create({
  container: {
    width: 344,
    height: 104,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  contentContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },

  adBadge: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 21,
    zIndex: 1,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#fabd00',
  },

  adBadgeText: {
    fontSize: 14,
    color: '#ffffff',
  },

  iconContainer: {
    minWidth: 24,
    marginRight: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
  },

  icon: {
    width: 104,
    height: 104,
  },

  content: {
    flexShrink: 1,
    flexGrow: 1,
    maxHeight: 104,
    padding: 8,
  },

  headline: {
    fontSize: 14,
    color: '#373d3f',
    lineHeight: 18,
  },

  advertiser: {
    marginVertical: 4,
    fontSize: 12,
    color: '#8392a7',
  },

  footerContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  ratingContainer: {
    flexDirection: 'row',
  },

  ratingNumber: {
    marginRight: 8,
    color: '#8392a7',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    paddingHorizontal: 20,
    paddingVertical: 0,
    borderRadius: 14,
    backgroundColor: '#fa4169',
  },

  buttonText: {
    fontSize: 12,
    color: '#ffffff',
  },
});
