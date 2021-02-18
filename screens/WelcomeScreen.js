//Codes of project 78

import React, { Component } from 'react';
import { ScrollView,Modal,View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert,KeyboardAvoidingView } from 'react-native';
//import SantaClaus from '../components/santaClaus.js';
import db from '../config';
import firebase from 'firebase/';
//import SantaClaus from '../components/santaClaus';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      isModalVisible:false,
      emailId : '',
      password: '',
      confirmPassword:'',
      firstName:'',
      lastName:'',
      mobileNo:'',
      address:'',
      userName:'',
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }

  userSignUp = (emailId, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return alert("password doesn't match\nCheck your password.")
    }else{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        db.collection('users').doc.add({
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          mobileNo:this.state.mobileNo,
          email:this.state.emailId,
          address:this.state.address
        })
        return  alert(
             'User Added Successfully. Hope you will feel better experience of app.',
             '',
             [
               {text: 'OK,Thank you', onPress: () => this.setState({"isModalVisible" : false})},
             ]
         );
      })
      .catch((error)=> {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
      });
    }
  }

  showModal=()=>{
    console.log(this.state.isModalVisible);
    return(
      <Modal animationType="fade"
      transparent={false}
      visible={this.state.isModalVisible}>
        <View>
          <ScrollView>
              <KeyboardAvoidingView>
                <Text> Registration
                  </Text>
      < TextInput
      style={styles.loginBox}
      placeholder={"First Name"}
      maxLength={8}
      onChangeText={(text)=>{
           this.setState({
             firstName:text
           })
      }}
      
      />
          < TextInput
      style={styles.loginBox}
      placeholder={"Last Name"}
      maxLength={8}
      onChangeText={(text)=>{
           this.setState({
             LastName:text
           })
      }}
      
      />
         < TextInput
      style={styles.loginBox}
      placeholder={"Your Address"}
      maxLength={50}
      onChangeText={(text)=>{
           this.setState({
             address:text
           })
      }}
      
      />
         < TextInput
      style={styles.loginBox}
      placeholder={"Mobile No."}
      maxLength={10}
      onChangeText={(text)=>{
           this.setState({
             mobileNo:text
           })
      }}
      
      />
         < TextInput
      style={styles.loginBox}
      placeholder={"A Email"}
      keyboardType={'email-address'}
      maxLength={20}
      onChangeText={(text)=>{
           this.setState({
             emailId:text
           })
      }}
      
      />
         < TextInput
      style={styles.loginBox}
      placeholder={"user Name"}
      maxLength={16}
      onChangeText={(text)=>{
           this.setState({
             userName:text
           })
      }}
      />
         < TextInput
      style={styles.loginBox}
      placeholder={"password"}
      secureTextEntry={true}
      maxLength={8}
      onChangeText={(text)=>{
           this.setState({
             password:text
           })
      }}
      
      />
         < TextInput
      style={styles.loginBox}
      secureTextEntry={true}
      placeholder={"Confirm Password"}
      maxLength={8}
      onChangeText={(text)=>{
           this.setState({
             confirmPassword:text
           })
      }}
      
      />
      <View>

      <TouchableOpacity style={styles.button} onPres={()=>this.userSignUp(this.emailId,this.password,this.confirmPassword )}>
    <Text style={styles.buttonText}>Register</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={()=>{this.setState({isModalVisible:false})}}>
    <Text style={styles.buttonText}>Cancel</Text>

      </TouchableOpacity>
      </View>
    
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
        
        </Modal>
    )
  }

  




  render(){  
      
    return(
    <View syle={styles.container}>
    
    <Image
      source={{uri:'https://zaayega.com/blog/wp-content/uploads/2015/03/Benefits-of-selling-products-online-in-India.jpg'}}
      style={{ alignSelf: 'center', width: 250, height: 250,marginTop:0.1}}
      />
      <Text style={{alignSelf:'center',fontSize:36,marginTop:10}}>Welcome to BussinesPur App</Text>

      {
  
  this.showModal()
}

    
        <TextInput
              style={styles.loginBox}
              placeholder="enter Mail Id"
              placeholderTextColor = "black"
              keyboardType ='email-address'
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            />
        
        <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="password you create"
              placeholderTextColor = "black"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
        
        <TouchableOpacity
                style={[styles.button,{marginBottom:20, marginTop:20}]}
                onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
                >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.setState({isModalVisible:true})}}

                >
                <Text style={styles.buttonText}>New User?SignUp</Text>
              </TouchableOpacity>
        </View>
          
    )
            
    }

}


const styles = StyleSheet.create({
    container:{
      flex:1,
      color:'white',
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10,
      borderRadius:20,
      alignSelf:'center',
      marginTop:10,
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      alignSelf:'center',
      margin:10,
      backgroundColor:"blue",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      }
    },
    button2:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"red",
      marginTop:20,
      marginLeft:50,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
         shadowOpacity: 0.30,
         shadowRadius: 10.32,
         elevation: 16,
      }
    } ,  

  
    buttonText:{
      color:'white',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
})