import React, {useState, useRef} from 'react';
import Slick from 'react-native-slick';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';
// import video from 'react-native-video';
import {TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';

// import Carousel, {Pagination} from 'react-native-snap-carousel';
import colors from '../config/colors';
const SLIDER_WIDTH = Dimensions.get('window').width + 150;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.98);
function ImageSlider({images, videos, thumbnail}) {
  const [allImages, setallImages] = useState(images);
  const [video, setvideo] = useState(videos);

  var allMedia = null;
  function returnAllMedia() {
    if (!video) {
      allMedia = [...images];
    } else {
      allMedia = [video, ...images];
    }
    return allMedia;
  }

  const [media, setmedia] = useState(returnAllMedia());
  const [paused, setPaused] = useState(true);

  const videoPlayer = useRef(null);
  const isCarousel = React.useRef(null);

  return (
    <View>
      {media !== [] ? (
        <>
          <View
            style={{
              width: '100%',
              height: 250,
            }}>
            <Slick
              style={{
                padding: '0.90%',
                paddingTop: '2%',
              }}
              showsButtons={true}
              buttonWrapperStyle={{paddingHorizontal: '5%', top: '-13%'}}>
              {media.map((item, idx) => {
                return (
                  <>
                    <View key={idx}>
                      {!video ? (
                        <>
                          <Image source={{uri: item}} style={styles.image} />
                        </>
                      ) : (
                        <>
                          {idx == 0 ? (
                            <TouchableOpacity key={idx}>
                              <VideoPlayer
                                source={{uri: item}}
                                seekColor={'#50A5F4'}
                                style={styles.video}
                                tapAnywhereToPause={true}
                                ref={videoPlayer}
                                paused={paused}
                              />
                              <>
                                {paused && (
                                  <View
                                    style={{
                                      flex: 1,
                                      backgroundColor: 'rgba(0,0,0,0.2)',
                                      position: 'absolute',
                                      resizeMode: 'cover',
                                      zIndex: 1,

                                      height: '99.99%',
                                      width: '99.99%',
                                    }}>
                                    {!thumbnail ? (
                                      <>
                                        <View
                                          style={{
                                            height: '99.99%',
                                            width: '99.99%',
                                            backgroundColor: 'lightgray',
                                            zIndex: 10,
                                          }}>
                                          <FastImage
                                            key={'Image132View1BtnAImg'}
                                            style={{
                                              // height: '100%',
                                              // width: '100%',
                                              height: '40%',
                                              width: '40%',
                                              // padding: '0.1%',
                                              padding: 11,
                                              paddingBottom: 13,
                                              top: 55,

                                              flexDirection: 'row',
                                              position: 'absolute',
                                              backgroundColor: 'lightgray',
                                              alignSelf: 'center',
                                              zIndex: 30,
                                            }}
                                            source={require('../img/giphyloading2.gif')}
                                          />
                                        </View>
                                      </>
                                    ) : (
                                      <>
                                        <Image
                                          key={'Image1View1Btnthumbnail'}
                                          style={{
                                            height: '100%',
                                            width: '100%',
                                          }}
                                          source={{uri: thumbnail}}
                                        />

                                        <FontAwesome
                                          name="play"
                                          style={{
                                            position: 'absolute',
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            top: 65,
                                          }}
                                          color={colors.secondary}
                                          size={55}
                                          onPress={() => {
                                            setPaused(false);
                                          }}
                                        />
                                      </>
                                    )}
                                  </View>
                                )}
                              </>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity key={idx}>
                              <Image
                                source={{uri: item}}
                                style={styles.image}
                              />
                            </TouchableOpacity>
                          )}
                        </>
                      )}
                    </View>
                  </>
                );
              })}
            </Slick>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: '100%',
              height: 73,
            }}>
            <Text
              style={{
                paddingHorizontal: '5%',
                paddingVertical: '5%',
                fontSize: 25,
              }}>
              No images available
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width - 8,
    height: 196,
    marginLeft: 5,
    marginRight: 5,
    // height: Dimensions.get('window').height - 5,
  },
  video: {
    width: Dimensions.get('window').width - 7,
    height: Dimensions.get('window').height - 20,
    marginLeft: 7,
    marginRight: 7,
    paddingVertical: '25%',
    paddingHorizontal: '22%',
  },
  noVideo: {
    width: Dimensions.get('window').width - 18,
    height: 165,
    backgroundColor: 'grey',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noVideoText: {
    width: Dimensions.get('window').width - 18,
    height: 175,
    backgroundColor: 'grey',
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ImageSlider;
