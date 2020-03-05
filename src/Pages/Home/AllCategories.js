import React from 'react';
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

import AllCategorystyles from '../../Styles/Home/AllCategory.styles';
import { ScrollView } from 'react-native-gesture-handler';

// function AllCategory({ navigation: { goBack } }) {
  export class  AllCategory extends React.Component{
    render(){
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#fff' }}>
        <Appbar.BackAction
         onPress={() => this.props.navigation.goBack()}
        />
        <Appbar.Content
          title="AllCategories"

        />

      </Appbar.Header>
      <ScrollView >
        <View style={{ marginBottom: 50 }}>
          <View style={AllCategorystyles.rowView}>

            <TouchableOpacity

              onPress={() => this.props.navigation.navigate('CategoriyItems')}
            >
              <ImageBackground
                source={require('../../Assets/Home/CategoryImages/biryani.jpg')}
                style={AllCategorystyles.imageContainer}
                imageStyle={AllCategorystyles.imagebackground}

              >
                <Text style={AllCategorystyles.imagetext}>Biryani</Text>
              </ImageBackground>
            </TouchableOpacity>

            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/Pickle.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Pickles</Text>
            </ImageBackground>
          </View>
          <View style={AllCategorystyles.rowView}>
            <ImageBackground
             source={require('../../Assets/Home/CategoryImages/Dosa.png')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Dosa</Text>
            </ImageBackground>

            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/Sambar.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Sambar</Text>
            </ImageBackground>
          </View>
          <View style={AllCategorystyles.rowView}>
            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/chutney.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Chutneys</Text>
            </ImageBackground>

            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/biryani.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Paneer Biryani</Text>
            </ImageBackground>
          </View>
          <View style={AllCategorystyles.rowView}>
            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/biryani.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Biryani</Text>
            </ImageBackground>

            <ImageBackground
              source={require('../../Assets/Home/CategoryImages/biryani.jpg')}
              style={AllCategorystyles.imageContainer}
              imageStyle={AllCategorystyles.imagebackground}

            >
              <Text style={AllCategorystyles.imagetext}>Biryani</Text>
            </ImageBackground>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
}

export default function(props) {
  const navigation = useNavigation();

  return <AllCategory {...props} navigation={navigation} />;
}
