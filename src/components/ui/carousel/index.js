import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
} from 'react-native';

import Label from '../label';
import {Color} from '../../../utils/color';
import ThemeUtils from '../../../utils/themeUtils';


const Carousel = props => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {props.testimonialDetails.map((testimonial, imageIndex) => {
            
            return (
              <View
                style={{width: windowWidth, alignSelf: 'flex-end'}}
                key={imageIndex}>
                <View style={styles.card}>
                  
                  <View>
                    <Label mt={22}  color={Color.BLACK}>
                      {testimonial.name}
                    </Label>
                  </View>
                </View>
              </View>
            );
          })}
          
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {props.testimonialDetails.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            // console.log('====================================');
            console.log("dot",scrollX,width,imageIndex);
            // console.log('====================================');
            let backgroundColor = 'pink';
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width,backgroundColor}]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: ThemeUtils.relativeHeight(5),
    backgroundColor: Color.CAROUSEL_BACKGROUND,
    paddingVertical:10
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carousel;
