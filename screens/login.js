import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon, ActivityIndicator, Modal, View, Header } from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Registro from './registro';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      contraseña:'',
      isloading: true,
    } 
  }
  ShowHideActivityIndicator = () =>{
    const navegar = this.props.navigation;
    if(this.state.isLoading == true){
      this.setState({isLoading: false})
    }else{
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('HolaMundo');
        this.setState({isLoading: false})
      },5000);
    }
  }
  render(){
    const navegar = this.props.navigation;
    return (
    <Container>
    <Header/>
    <View style={styles.content}>
    {
      this.state.isLoading ?
      <Modal
        transparent = {true}
        animationType = {'none'}
        visible = {this.state.isloading}>
        <View style = {styles.modalBackground}>
          <View style = {styles.activityIndicatorWrapper}>
            <ActivityIndicator style = {{padding: 70}}/>
          </View>
        </View>
      </Modal> : null
    }
    </View>
    <Content padder contentContainerStyle={styles.content}>
      <Card>
        <CardItem header bordered>
          <Text style={styles.textCenter}>Inicio de Sesión</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Item inlineLabel>
              <Icon type='FontAwesome' name='user' />
                <Input placeholder='Nombre de Usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre}) } />
              </Item>
              <Item inlineLabel last>
                <Icon type='FontAwesome' name='lock' />
                <Input placeholder='Contraseña' secureTextEntry={true} value={this.state.contraseña} onChangeText={(contraseña)=> this.setState({contraseña}) }/>
              </Item>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Button
                primary style = {styles.boton} onPress = {this.ShowHideActivityIndicator}><Text> ENTRAR </Text></Button>
        </CardItem>
        <CardItem footer bordered>
          <Button
                success
                onPress={() => {
                  navegar.navigate('Registro', {
                    titulo: 'Registro de usuario',
                  });
                }}>
                <Text>
                  REGISTRATE
                </Text>
              </Button>
        </CardItem>
      </Card>
    </Content>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%' // OCUPAR EL ANCHO DE CARD
  },
  boton:{
    marginLeft: '70%',
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#00000040'
  } ,
  activityIndicatorWrapper : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});


export default Login;