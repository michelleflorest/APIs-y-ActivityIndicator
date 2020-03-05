import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Card} from 'native-base';

class Primero extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }
  async componentDidMount(){
    try{
      const response = await fetch('https://cloud.google.com/translate/docs/apis#referencia-de-la-api-de-rest');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }
  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) =>
            <Card>
              <Text>Titulo: {item.title}</Text>
              <Text>Episodio: {item.episode_id}</Text>
              <Text>Director: {item.director}</Text>
            </Card> 
          }
          keyExtractor = {({episode_id},index)=>episode_id} />
      </View>
    );
  }
}
export default Primero;