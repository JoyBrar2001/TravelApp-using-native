import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import profile from '../assets/images/person.png'
import likedData from '../assets/data/likedData'

const CreateLikedCard = ({ item, index }) => (
  <View style={[styles.likedCardWrapper, { backgroundColor: index === 0 ? colors.orange : colors.lightGray }]}>
    <View style={styles.likedCardLeft}>
      <Image source={item.image} style={styles.likedCardImage} />
    </View>

    <View style={styles.likedCardRight}>
      <Text style={[styles.likedTitle, { color: index === 0 ? colors.white : colors.black }]}>{item.title}</Text>
      <View style={styles.likedLocationWrapper}>
        <Entypo name='location-pin' size={18} color={colors.black} />
        <Text style={[styles.likedLocation, { color: index === 0 ? colors.white : colors.black }]}>{item.location}</Text>
      </View>
      <View style={styles.heartWrapper}>
        <Entypo name='heart' size={32} color={colors.orange} />
      </View>
    </View>
  </View>
)

const Liked = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Feather
            name='menu'
            size={32}
            color={colors.black}
            style={styles.menuIcon}
          />
          <Image source={profile} style={styles.profileImage} />
        </View>
      </SafeAreaView>

      <View style={styles.likedWrapper}>
        <Text style={styles.likedTitle}>Your Liked Destinations</Text>
        <View style={styles.likedList}>
          {likedData.map((item, index) => (
            <CreateLikedCard key={index} item={item} index={index} />
          ))}
        </View>
      </View>
    </View>
  )
}

export default Liked

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  likedWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  likedTitle: {
    fontSize: 32,
  },
  likedList: {
    flexDirection: 'column',
    marginTop: 25,
    gap: 20,
  },
  likedCardWrapper: {
    backgroundColor: '#00000010',
    borderRadius: 25,
    flexDirection: 'row',
  },
  likedCardImage: {
    width: 125,
    height: 170,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  likedCardRight: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
    gap: 8,
    flex: 1,
  },
  likedTitle: {
    fontSize: 20,
  },
  likedLocationWrapper: {
    flexDirection: 'row',
  },
  likedLocation: {
    fontSize: 12,
  },
  heartWrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: -10,
    top: -20,
    shadowOffset: {
      width: -2, 
      height: 4 
    },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})