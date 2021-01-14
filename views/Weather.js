import React from 'react';
import {KeyboardAvoidingView, StatusBar, Image, Text, TouchableOpacity, View, TextInput, Platform, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
export {Weather};

export default class Weather extends React.Component{
        constructor(props){
          super(props);
            this.state ={
              data: [],
              isLoading: true,
              temp:"",
              city:"City",
              icon:"",
              city_display:"",
              desc: "",
              main:"",
              humidity:"",
              pressure:"",
              visiblity:"",
              lat:"",
              lon:"",
          }
          this.fetch_weather()
        }
      
        fetch_weather=()=> {
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=f9258837e7b2549e62c69c308abe4020&lang=pt_br")
            .then((response) => response.json())
            .then((json) => {
              this.setState({ data: json });
              this.setState({ temp : (json.main.temp-273.15).toFixed()+"°" })
              this.setState({ city_display : json.name })
              this.setState({ icon: json.weather[0].icon})
              this.setState({ desc : json.weather[0].description})
              this.setState({ main : json.weather[0].main})
              this.setState({ lat : json.coord.lat})
              this.setState({ lon : json.coord.lon})
              this.setState({ humidity : json.main.humidity+" %"})
              this.setState({ pressure : json.main.pressure+" hPa"})
              this.setState({ visibility : (json.visibility/1000).toFixed(2)+" Km"})
            })
            .catch((error) => console.error(error))
            .finally(() => {
              this.setState({ isLoading: false });
            });
        }
      
      
render(){
    return(
    <ScrollView style={weather.sv} scrollEnabled={false} height={'100%'} width={'100%'}>
    <View style={weather.bg}>
        <StatusBar barStyle={'light-content'} backgroundColor = "#5000CA"/>
            <View >
            <TextInput placeholder="Buscar" color={'white'} selectionColor={'white'} placeholderTextColor="#fff" style={weather.SearchBox} onChangeText={(text)=>this.setState({city : text})} />
            <TouchableOpacity style={weather. Weatherbtn} onPress={this.fetch_weather}>
                <Icon style={weather.Weatherbtnicon} name="magnifying-glass" size={30} color="#5000CA" type="entypo" />
            </TouchableOpacity>
            </View>
            <View style={weather.header}>
            <Text style={weather.headercity}>{this.state.city_display}</Text>
            <Text style={weather.headertemp}>{this.state.temp}</Text>
            <Text style={weather.headerweather}>{this.state.desc}</Text>
            </View>
            <View style={weather.footer}>
            <View style={weather.cardfooter}>
            <Text style={weather.footerweather2}>Tempo: {this.state.desc}</Text>
            <Text style={weather.footerweather2}>Latitude: {this.state.lat}</Text>
            <Text style={weather.footerweather2}>Longitude: {this.state.lon}</Text>
                </View>
            </View>
    </View>
    </ScrollView>
    )
}
}

const weather = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#5000CA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SearchBox: {
        width: 300,
        height: 40,
        paddingLeft: 15,
        alignItems: 'center',
        alignSelf: 'center',
        letterSpacing: 0,
        top: 30,
        right: 20,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
    },
    Weatherbtn: {
        position: "absolute",
        top: 30,
        left: 290,
        height: 40,
        width: 40,
        backgroundColor: 'white',
        justifyContent: "center",   
        borderRadius: 80,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.40,
        shadowRadius: 9.00,
        elevation: 5,
    },
    Weatherbtnicon: {     
        alignItems: 'center',
    },
    header: {
        position: "absolute",
        top: 0,
        bottom: 600,
        marginTop: 0,        
        alignItems: 'center',
        justifyContent: 'center'
    },
    headercity: {
        marginBottom: 0,
        color: 'white',
        fontSize: 19,
    },
    headertemp: {
        color: 'white',
        fontSize: 85,
    },
    headerweather: {
        color: 'white',
        fontSize: 18,
    },
    footer: {
        marginTop: 400,
        width: '100%',
        height: 550,
        backgroundColor: 'white',
        marginBottom: 0,
        borderRadius: 30,
    },
    cardfooter: {
        marginTop: 180,
        backgroundColor: 'white',
        alignSelf: "center",
        paddingTop: 10,
        paddingLeft: 10,
        width: '90%',
        height: '90%',
        borderRadius: 15,
    },
    footerweather2: {
        fontSize: 18,
        color: '#5000CA',
        alignSelf: 'center',
        paddingTop: 0,
    },
});