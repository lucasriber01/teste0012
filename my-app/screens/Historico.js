import React from 'react';
import { View, Text , Button , StyleSheet, Image} from 'react-native';



const Historico = ({navigation})=>{ 

 

return (
  <View style={styles.container}>


    


    <Text>Dados dos últimos Calculos</Text>
      <View
        style={styles.card}
      >
        <Image source={{uri: 'https://static.zattini.com.br/bnn/l_zattini/2020-04-20/6123_7118_02.png'}} style={styles.cardImage} />

      </View>


  </View>
);
};


export default Historico ;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  card: {
    width: 300,
    height: 150,
    padding: 20,
    borderRadius :30
  },
  cardImage: {
    width: 300,
    height: 130,

    borderRadius :30
    

  }
});
