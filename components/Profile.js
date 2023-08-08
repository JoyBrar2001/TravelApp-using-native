import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import profile from '../assets/images/person.png'

Feather.loadFont();

const Profile = () => {
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
          <Image source={profile} />
        </View>
      </SafeAreaView>

      <View style={styles.profileInfo}>
          <Image source={profile} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileSince}>Member since 07-12-22</Text>
      </View>

      <View style={styles.profileButtonWrapper}>
        <View style={[styles.profileButton, {backgroundColor: colors.orange}]}>
          <Text style={[styles.profileButtonText, {color: colors.white}]}>Your Profile</Text>
        </View>
        <View style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Your Bookings</Text>
        </View>
        <View style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Liked</Text>
        </View>
        <View style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Settings</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

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
  profileInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  profileName: {
    fontSize: 32,
    color: colors.black,
  },
  profileSince: {
    fontSize: 16,
    color: colors.gray,
    marginTop: -5,
  },
  profileButtonWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  profileButton: {
    width: 360,
    backgroundColor: '#00000010',
    paddingVertical: 15,
    borderRadius: 10,
  },
  profileButtonText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  }
})