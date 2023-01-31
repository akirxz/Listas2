import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, StyleSheet}  from "react-native"
 
import database from "../config"

export default function Profile({navigation, route}){
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id
 
  function editTask(description, id){
    database.collection("Tasks").doc(id).update({
      description: description,
    })
    navigation.navigate("Lista")
  }
  
return(
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Item:</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          editTask(descriptionEdit, idTask)
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor:'#fff'
    },
    label:{
      width:"90%",
      marginTop: 20,
      fontSize:16,
      marginLeft: 20,
      color:"#B4B3B3"
    },
    input:{
     width:"90%",
     marginTop:10,
     padding:10,
     height:50,
     borderBottomWidth: 1,
     borderBottomColor:"#B4B3B3",
     marginLeft:"auto",
     marginRight:"auto"
    },
    buttonNewTask:{
     width:60,
     height:60,
     position:"absolute",
     bottom: 30,
     left:20,
     backgroundColor:"#B4B3B3",
     borderRadius:50,
     justifyContent:"center",
     alignItems: "center"
    },
    iconButton:{
     color:"#ffffff",
     fontSize:16,
     fontWeight:"bold",
    }
    
   });
