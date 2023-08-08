import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Entypo from 'react-native-vector-icons/Entypo'

const height = Dimensions.get("window").height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={item.imageBig}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Entypo name='chevron-left' size={42} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name='location-pin' size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name='heart' size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height*0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backIcon: {
    marginTop: 60,
    marginLeft: 20,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -20,
    width: 64,
    height: 64,
    backgroundColor: "white",
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
})