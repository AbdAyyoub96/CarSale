import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../../Assets/Styles/Global.Style";

export const CustomInput = ({name}:any)=>{

    return (
         <View style={{marginVertical:10}}>
            <TextInput style={styles.TextInput} placeholder={name}/>
         </View>
    )

}