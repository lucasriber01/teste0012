
import { Picker } from '@react-native-community/picker';
import React from 'react';
import { View, Text , Button , StyleSheet,TextInput, Dimensions, Alert ,SafeAreaView, ScrollView} from 'react-native';
 //import RNPickerSelect from "react-native-picker-select";





const {width , height}= Dimensions.get("screen")


const Calculadora = ({navigation})=>{ 

  state={
    estado:'',
    pickerValueB: '' ,
};




return (

  <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
  <View style={styles.container}>

<Text>Calculadora</Text>

    <View>
      <Picker
      
      style={styles.pickerComponente}
      selectedValue={this.state.estado}
      onValueChange={
        (itemValor,itemIndex) => this.setState({
          estado:itemValor 
        })
      }      
>
  <Picker.Item  label = "Escolha o estado de origem do objeto" value=""/>
  <Picker.Item  label = "Acre" value="Acre "/>
  <Picker.Item  label = "Alagoas " value="Alagoas"/>
  <Picker.Item  label = "Amapá" value="Amapá "/>
  <Picker.Item  label = "Amazonas " value="Amazonas "/>
  <Picker.Item  label = "Bahia" value="Bahia"/>
  <Picker.Item  label = "Ceará" value="Ceará"/>
  <Picker.Item  label = "Distrito Federal" value="Distrito Federal"/>
  <Picker.Item  label = "Espírito Santo" value="Espírito Santo"/>
  <Picker.Item  label = "Goiás" value="Goiás"/>
      </Picker>


      <Picker 
      selectedValue={this.state.pickerValueB}
      onValueChange={(value) => {
         this.setState({pickerValueB: value});
      }} itemStyle={{color: 'white'}}>
      <Picker.Item label={'Estado de destino do Objeto'} value={'0'} />
      <Picker.Item  label = "Acre" value="Acre "/>
      <Picker.Item  label = "Alagoas " value="Alagoas"/>
      <Picker.Item  label = "Amapá" value="Amapá "/>
      <Picker.Item  label = "Amazonas " value="Amazonas "/>
      <Picker.Item  label = "Bahia" value="Bahia"/>
      <Picker.Item  label = "Ceará" value="Ceará"/>
      <Picker.Item  label = "Distrito Federal" value="Distrito Federal"/>
      <Picker.Item  label = "Espírito Santo" value="Espírito Santo"/>
      <Picker.Item  label = "Goiás" value="Goiás"/>
    </Picker>
    </View>




    
  <View style={styles.inputContainer}>
    <Text>Valor do produto</Text>
    <TextInput style={styles.input}/>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  O que e ?
</Text>
  </View>
 
  <View style={styles.inputContainer}>
    <Text>Valor do IPI</Text>
    <TextInput style={styles.input}/>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  O que e ?
</Text>
  </View>

  <View style={styles.inputContainer}>
    <Text>Valor do Frete</Text>
    <TextInput style={styles.input}/>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  O que e ?
</Text>
  </View>


  <View style={styles.inputContainer}>
    <Text>Valor do frete</Text>
    <TextInput style={styles.input}/>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  O que e ?
</Text>
  </View>
  <View style={styles.inputContainer}>
    <Text>MVA</Text>
    <TextInput style={styles.input}/>
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  O que e ?
</Text>
  </View>
  <Button
        title="Calcular"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.bot}
      />

<Button
        title="Produtos insentos"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.bot}
      />

      
</View>

</ScrollView>
</SafeAreaView>
  );
};


export default Calculadora ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    marginVertical:30,
    width:width/1.3

  }
  ,
  input:{
    borderColor:'black',
    borderWidth:3 

  },
  bot:{
    borderRadius:100,
  },

  pickerComponente:{
    width:350,
  }

});
