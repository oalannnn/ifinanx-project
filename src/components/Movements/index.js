import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function Movements({data}) {
    const [showValue, setShowValue ] = useState(false);
 return (
    <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
           <StatusBar style="auto" />
           <Text style={styles.date}>{data.date}</Text>

           <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            
            {showValue ? (
                <View style={styles.iconeye}>
                  <Feather name="" size={0} color="#000" />
                </View>
            ) : (
              <AntDesign name="eye" size={15} color="#000"  style={styles.eyeIcon} />
            )}

            { showValue ? (
                   <Text 
                   style={data.type == 1 ? styles.value : styles.expenses}>
                   £{data.type === 1 ? '' : '-'}
                       {data.value}
                   </Text>
                   
            ) : (

                    <View style={styles.skeleton}>

                    </View>
            )}

           </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color: '#DADADA',
        fontWeight: 'bold',
    },
    label:{
        fontWeight: 'bold',
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 6,
    },
    eyeIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,       
        margin: 2,
    }
});
