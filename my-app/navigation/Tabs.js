import React from 'react';
import {StyleSheet , Text , View , Image , TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import CalculadoraScreen from '../screens/CalculadoraScreen';
import Historico from '../screens/Historico';
import Manuais from '../screens/Manuais';
import Chat from '../screens/Chat';



const Tab = createBottomTabNavigator();

const Tabs =() => {
  return (
    <Tab.Navigator  
      tabBarOptions={{showLabel:false , style:{
        position: 'absolute',
        botton:25,
        left:20,
        right:20, 
        elevation:0,
        backgroundColor: '#ffffff',
        borderRadius:15 ,
        height:90,
        ...style.shadow}}}>
      <Tab.Screen name="Calculadora" component={CalculadoraScreen} options ={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems :'center' ,justifyContent:'center' , top:10}}> 
            <Image  source={require('../assets/calculadora.png')}
            resizeMode='contain'
            style={{
              width:30,
              height:30,

            }}/>
            <Text>Calculadora</Text>
          </View>
        ),
      }      }/>
      <Tab.Screen name="Historico" component={Historico} options ={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems :'center' ,justifyContent:'center' , top:10}}> 
            <Image  source={require('../assets/mapa.png')}
            resizeMode='contain'
            style={{
              width:30,
              height:30,

            }}/>
            <Text>Historico</Text>
          </View>
        ),
      }      }/>
      <Tab.Screen name="Manuais" component={Manuais} options ={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems :'center' ,justifyContent:'center' , top:10}}> 
            <Image  source={require('../assets/livro.png')}
            resizeMode='contain'
            style={{
              width:30,
              height:30,

            }}/>
            <Text>Manuais</Text>
          </View>
        ),
      }      }/>
      <Tab.Screen name="Chat" component={Chat} options ={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems :'center' ,justifyContent:'center' , top:10}}> 
            <Image  source={require('../assets/chat.png')}
            resizeMode='contain'
            style={{
              width:30,
              height:30,

            }}/>
            <Text>Chat</Text>
          </View>
        ),
      }      }/>

    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow:{
     shadowColor:'#7F5DF0',
     shadowOffset:{
        width:0,
        height:10,},

     shadowOpacity:0.25,
     shadowRadius:3.5,
     elevation:5

}
}
);


export default Tabs ;
