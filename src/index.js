import React, { Component } from "react";

import { StyleSheet, Alert, Image } from 'react-native';

import {
  Container, Header, Title, Content, 
  Button, ListItem, CheckBox, Text, 
  Right, Body, Item, Input
} from "native-base";

//const TestFairy = require('react-native-testfairy');

export default class App extends Component {  

  // async componentDidMount() {
  //   function testFairy(){
  //     TestFairy.setServerEndpoint("https://app.inmetrics-mobile.com/services/");
  //     TestFairy.begin("9d8c9d3aba8307f265b5afe1e14d772017eeac1c");
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      nome:'',
      email:'',
      assunto: []
    };
  }

  updateValue(text, field) {
    if(field=='nome')
    {
      this.setState({
        nome:text,
      })
    }
    else if(field=='email')
    {
      this.setState({
        email:text,
      })      
    }
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
    if (this.state.checkbox1==false)
    {
      this.setState({
        assunto: this.state.assunto.concat(['Continuous Testing'])
      });
    }
    else
    {
      assuntoUpdated = this.state.assunto.filter(e => e !== 'Continuous Testing');
      this.setState({
        assunto:assuntoUpdated
      });
    }
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
    if (this.state.checkbox2==false)
    {
      this.setState({
        assunto: this.state.assunto.concat(['Continuous Monitoring'])
      });
    }
    else
    {
      assuntoUpdated = this.state.assunto.filter(e => e !== 'Continuous Monitoring');
      this.setState({
        assunto:assuntoUpdated
      });
    }   
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
    if (this.state.checkbox3==false)
    {
      this.setState({
        assunto: this.state.assunto.concat(['Mobile Automation'])
      });
    }
    else
    {
      assuntoUpdated = this.state.assunto.filter(e => e !== 'Mobile Automation');
      this.setState({
        assunto:assuntoUpdated
      });
    }      
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
    if (this.state.checkbox4==false)
    {
      this.setState({
        assunto: this.state.assunto.concat(['Continuous Performance'])
      });
    }
    else
    {
      assuntoUpdated = this.state.assunto.filter(e => e !== 'Continuous Performance');
      this.setState({
        assunto:assuntoUpdated
      });
    }    
  }

  submit(){
    let collection={}
    collection.nome=this.state.nome,
    collection.email=this.state.email,
    collection.assunto=this.state.assunto.toString();

    //console.warn(collection)

    var url = 'https://tdc-app-contato.herokuapp.com/api/v1/contacts';
    //var url = 'http://10.10.6.135:3000/api/v1/contacts/';
    
    //var data = {nome: "Meu App ", email: "App@gmail.com", assunto: "EEEE"};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => response.json())
      .then((responseJson) => {Alert.alert(responseJson.message);})
      .catch((error) => {console.error(error);});
  }  

  render() {
    const resizeMode = 'cover';
    return (
      <Container style={styles.container}>
        <Header style={styles.header_inm}>
          <Body>
            <Title>Inmetrics</Title>
            <Image style={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            resizeMode,
        }} source={require('./../assets/logo_inm.png')}/>
          </Body>
          <Right />
        </Header>
        <Content>

        <Item rounded style={styles.itemEstilo}>
              <Input placeholder="Nome" onChangeText={(text)=>this.updateValue(text, 'nome')} />
        </Item>  

        <Item rounded style={styles.itemEstilo}>
              <Input placeholder="E-mail" onChangeText={(text)=>this.updateValue(text, 'email')} />
        </Item>       
          <ListItem style={styles.listItem} button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>Continuous Testing</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Continuous Monitoring</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>Mobile Automation</Text>
            </Body>
          </ListItem>
          <ListItem style={styles.listItem} button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>Continuous Performance</Text>
            </Body>
          </ListItem>
            <Button style={styles.button} block light style={styles.mb15}
                    onPress={()=>this.submit()}>
              <Text>Enviar</Text>
            </Button>
  

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  header_inm:{
    backgroundColor: '#F5FCFF',
    height: 90,
  },
  tituloApp:{
    fontSize: 30,
  },
  itemEstilo:{
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  listItem:{
    borderColor: '#F5FCFF',
  },
  input:{ 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    height: 60,
    width: 300,
  },
  button:{
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  mb15: {
    marginBottom: 20
  },
  
});