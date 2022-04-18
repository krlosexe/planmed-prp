import React from 'react'
import { TouchableOpacity, ImageBackground, View, StatusBar, StyleSheet, SafeAreaView, ScrollView, Text, Image } from 'react-native'
import Profile from '../components/Profile/Index'
import { Icon } from 'react-native-eva-icons';
import { Linking } from 'react-native'
import { primaryColor, colorBack } from '../Colors'

function RefferedDetailScreen(props) {
  const { item } = props.route.params;

  function callNow(phoneNumber) {
    console.log("cal")
    Linking.openURL(`tel:${phoneNumber}`)
  }

  function whatsappNow(phoneNumber) {
    Linking.openURL(`whatsapp://send?text=&phone=${phoneNumber}`)
  }

  function goToScreen(screen, user) {
    const procedure = 0
    props.navigation.navigate(screen, { randomCode: Math.random(), user, procedure })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#25D366"
        translucent={true}
        />
      <ImageBackground source={require('../src/images/LogIn.png')}
        style={styles.ImageBack}>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => goToScreen("ReferredListScreen", 0)}>
              <Icon name="arrow-ios-back-outline" width={25} height={25} fill={primaryColor} style={{ left: 20 }} />
            </TouchableOpacity>
            <Profile
              surname={item.apellidos}
              name={item.nombres}
              name_affiliate={item.name_affiliate}
            />
            <View style={styles.wrapFormat}>
              <View style={styles.formatContainer}>
                <Text style={styles.label}>Telefono:</Text>
                <Text style={styles.value}>{item.telefono}</Text>
              </View>
              <View style={styles.formatContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{item.email}</Text>
              </View>
              <View style={styles.line}></View>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.roundIcon} onPress={() => callNow(item.phone)}>
                <Icon name={'phone-call-outline'} width={20} height={20} fill='white' />
                <Text style={styles.minitext}>Llamar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundIcon} onPress={() => whatsappNow(item.phone)}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("../src/images/icon_whatsapp_white.png")}
                />
                <Text style={styles.minitext2}>WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundIcon} onPress={() => goToScreen("NewCita", item.id)}>
                <Icon name={'plus'} width={20} height={20} fill='white' />
                <Text style={styles.minitext}>Nueva{"\n"}Cita</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundIcon} onPress={() => goToScreen("MyCitas", item.id)}>
                <Icon name={'calendar'} width={20} height={20} fill='white' />
                <Text style={styles.minitext}>Ver Citas</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
export default RefferedDetailScreen
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection: "column",
    //backgroundColor: 'white'
  },
  ImageBack: {
    justifyContent: 'center',
    resizeMode: "cover",
    width: "100%",
    height: "100%"
  },
  content: {
    borderRadius: 20,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'column',
    paddingVertical: 20,
    maxHeight: "80%",
    overflow: "hidden"
  },
  wrapFormat: {
    marginTop: 20
  },
  formatContainer: {
    paddingHorizontal: 20,
    marginBottom: 5
  },
  label: {
    fontSize: 14,
    marginBottom: 2,
    fontWeight: 'bold',
    color: '#5C5C5C'
  },
  value: {
    fontSize: 16,
    marginBottom: 2,
    color: '#5C5C5C'
  },
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  roundIcon: {
    backgroundColor: primaryColor,
    width: 64,
    height: 64,
    margin: "1.5%",
    //borderRadius: 35,
    borderRadius: 8,
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minitext: {
    top: 4,
    color: "#FFF",
    fontSize: 12,
    textAlign: "center"
  },
  minitext2: {
    top: 4,
    color: "#FFF",
    fontSize: 10,
    textAlign: "center"
  },
  containerline: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  line: {
    marginVertical: 10,
    borderTopWidth: 2,
    borderTopColor: '#ECECEC',
    width: '90%'
  }
});