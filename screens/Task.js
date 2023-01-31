import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";

import database from "../config";
import { MaterialIcons } from "@expo/vector-icons";

export default function Task() {

    const [task, setTask] = useState([]);
  
    function deleteTask(id) {
      
      Alert.alert(
        "Deletar",
        "Tem certeza que deseja deletar?",
        [
          {
            text: "Cancelar",
            onPress: () => {
              return;
            },
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => database.collection("Tasks").doc(id).delete(),
          },
        ],
        { cancelable: false }
      );
    
    }
  
    useEffect(() => { 
      database.collection("Tasks").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
       
        setTask(list);
      });
    }, []);

       
        return (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( { item } )=>{
               return(
              <View style={styles.Tasks}>
                <View style={styles.checkContainer}>

                </View>
                <Text
                  style={styles.DescriptionTask}
                  onPress={()=>
                    navigation.navigate("Profile",{
                      id: item.id,
                      description: item.description,
                    })
                  }
                >
                {item.description}  
                </Text>  
              <TouchableOpacity
                  style={styles.deleteTask}
                  onPress={() => {
                    deleteTask(item.id)
                  }}
                >
                <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#8ABEBD"
                    />
                </TouchableOpacity>
              </View>
              )
            }}
          />
         
        </View>
      )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 20
 },
 Tasks:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:5
 },
 deleteTask:{
   justifyContent:"center",
   paddingRight:35,
 },
 DescriptionTask:{
  width:"75%",
  alignContent:"flex-start",
  backgroundColor:"#f5f5f5cf",
  padding:12,
  paddingHorizontal: 20,
  borderRadius:50,
  marginBottom: 5,
  marginRight:15,
  color:"#282b2db5",
 },
 buttonNewTask:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor:"#8ABEBD",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  fontSize:25,
  fontWeight:"bold",
 },
});

