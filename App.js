
import {SafeAreaView, Text, StatusBar, View, ActivityIndicator, Dimensions, ScrollView, ImageBackground} from 'react-native';
import styles from './style';

import  Header from './components/Header/Index'
import { useEffect, useState} from 'react';
import axios from 'axios';
export default function App() {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = 'https://www.breakingbadapi.com/api';

  useEffect(  () => {
    get();
  }, []);

  async function get(){
    setLoading(true);
    await axios.get(`${baseURL}/characters`).then( res => {
      setList(res.data);
    }).then( () => {
      setLoading(false);
    }).catch(e => {
        alert('Erro ao buscar informações');
    });
  }

 

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Header />
      
      { loading && 
        <View style={styles.containerLoading} >
            <ActivityIndicator size='large' />
        </View>
      }


        { !loading && 
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              list.map(el => (
               
                <View style={[styles.boxPersonal]} key={el.char_id}>
                  <ImageBackground
                    source={{uri: el.img}}
                    imageStyle={{ borderRadius: 8 }}
                    resizeMode='cover'
                    style={{ flex: 1, padding: 10, alignItems:'flex-end', justifyContent: 'flex-end'}}
                    >
                      <View style={styles.boxDescription}>
                        <ScrollView showsVerticalScrollIndicator={false} > 
                          <Text style={styles.personalTitle}>{el.name}</Text>
                          <Text style={styles.descriptionPersonal}>Birthday: {el.birthday} </Text>
                          <Text style={styles.descriptionPersonal}>Ocuppation: {el.occupation.join(', ')} </Text>
                          <Text style={styles.descriptionPersonal}>Status: { el.status }</Text>
                          <Text style={styles.descriptionPersonal}>Appearance: { el.appearance.join(', ') }</Text>
                          <Text style={styles.descriptionPersonal}>Nickname: { el.nickname }</Text>
                          <Text style={styles.descriptionPersonal}>Portrayed: { el.portrayed }</Text>
                        </ScrollView>
                      </View>
                    </ImageBackground>
                </View>
              ))
            }

          </ScrollView>
         }


    </SafeAreaView>
  );
}


