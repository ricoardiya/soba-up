import React from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import styles from './EmergencyContactScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const EmergencyContactScreen = () => {
  const dispatch = useAppDispatch()
  const onPress = () => {
    dispatch(changePage('welcome'))
  }
  const [fullName, setFullName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  return (
    <View style={styles.container}>
      <Image
        source={require('../../components/logo.png')}
        style={styles.logo}
      />
      <View style={styles.bottomPart}>
        <Text style={styles.header}>Emergency Contact Info</Text>
        <TextInput
          onChangeText={setFullName}
          placeholder="Full Name"
          style={styles.inputText}
        />
        <TextInput
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          style={styles.inputText}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Verify Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EmergencyContactScreen
