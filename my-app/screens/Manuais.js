import React from 'react';
import { View, Text , Button , StyleSheet, Image} from 'react-native';
const Manuais = ({navigation})=>{ 

return (
    <View style={styles.container}>
      <View
        style={styles.card}
      >
        <Image source={{uri: 'https://static.zattini.com.br/bnn/l_zattini/2020-04-20/6123_7118_02.png'}} style={styles.cardImage} />

      </View>

      <View
        style={styles.card}
      >
        <Image source={{uri: 'https://static.zattini.com.br/bnn/l_zattini/2020-04-20/6123_7118_02.png'}} style={styles.cardImage} />

      </View>

      <View
        style={styles.card}
      >
        <Image source={{uri: 'https://static.zattini.com.br/bnn/l_zattini/2020-04-20/6123_7118_02.png'}} style={styles.cardImage} />
      </View>


      <View
        style={styles.card}
      >
        <Image source={{uri: 'https://static.zattini.com.br/bnn/l_zattini/2020-04-20/6123_7118_02.png'}} style={styles.cardImage} />
      </View>

      <View
        style={styles.card}
      >
        <Image source={{uri: 'http://i.imgur.com/91AR0Lo.jpg'}} style={styles.cardImage} />
      </View>

    </View>
  );
};


export default Manuais ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center'
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

  },
  textLeft: {
    position: 'absolute',
    left:0,
    top:0
  },
  textRight: {
    position: 'absolute',
    right: 0,
    top: 0
  }
});
