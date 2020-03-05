import React, { PureComponent } from 'react';
import {
  View,Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { wrapperZoomImages, ImageInWraper } from 'react-native-zoom-lightbox';

const DEVICE_WIDTH = Dimensions.get('window').width;

class ImageZoom extends PureComponent {

  static propTypes = {
    getOpacity: PropTypes.func,
    captureCarouselItem: PropTypes.func,
    indexState: PropTypes.number,
    open: PropTypes.func,

  }

  constructor(props) {
    super(props);
    this.state = {
      arrayImages: [
          {
              url: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg'
          },
        {
          url: 'https://www.ndtv.com/cooks/images/vegetable.biryani.jpg',
        },
        { url: 'https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/7c/j8/p07cj8zj.jpg' }
    ],
    };
  }

  render() {
    const { getOpacity, captureCarouselItem, indexState, open } = this.props;
    const { arrayImages } = this.state;
    return (
      <View style={{ alignItems: 'center',flexDirection:'row',width: (DEVICE_WIDTH) }}>

        {
          arrayImages.map((item, index) =>
            <ImageInWraper
              key={index}
              open={open}
              indexState={indexState}
              getOpacity={getOpacity}
              captureCarouselItem={captureCarouselItem}
              index={index}
              url={item.url}
              style={{ width: (DEVICE_WIDTH)-20, height: (DEVICE_WIDTH) / 2 }}
            />
          )
        }

      </View>

    );
  }
}

export default wrapperZoomImages(ImageZoom);