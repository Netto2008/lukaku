import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import { useState } from 'react';
import ImgGay from './assets/matheus .png';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'Theu', text: 'Eae Netto, Suave?'  },//sender quem enviou a mensagem e o text o conteúdo da mensagem.
    { sender: 'Netto', text: 'Eai Theu!' },//sender quem enviou a mensagem e o text o conteúdo da mensagem.
    { sender: 'Theu', text: 'Se foi pra escola hoje??' },//sender quem enviou a mensagem e o text o conteúdo da mensagem.
    { sender: 'Netto', text: 'Fui sim , e ocê?' }, //sender quem enviou a mensagem e o text o conteúdo da mensagem.
    { sender: 'Theu', text: 'Teve o que de diferente la?' },
    { sender: 'Netto', text: 'Os caras do terceiro escreveram na parede lá, e se ferrarão bonito.'}
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={message.sender === 'Netto' ? styles.messageNetto : styles.messageTheu}>
            <Text style={styles.text}>{message.text}</Text>
          </View>
        ))}
      </View>
      <Image source={ImgGay}
      
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  chatContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  messageNetto: {
    backgroundColor: '#d1e7ff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },
  messageTheu: {
    backgroundColor: '#e1ffe1',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },
  text: {
    fontSize: 16,
  },

});
