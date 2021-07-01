import React from 'react';
import { View, Text , Button , StyleSheet} from 'react-native';
const Chat = ({navigation})=>{ 

return (
    <View style={styles.container}>
        <Text>Chat</Text>
    </View>
  );
};


export default Chat ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },

});
