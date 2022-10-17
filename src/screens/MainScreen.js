import React, { useState, useEffect } from 'react'
import {ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainScreen = ({ navigation }) => {

    const [memos, setMemos] = useState([]);

    useEffect(() => {


        const fetchMemos = async () => {
            const { data } = await axios.get("http://10.40.1.202:8080/board/list")
            console.log(data)
            setMemos(data);
        }
        fetchMemos();
    }, [memos])

    return (
        <ScrollView>
            <Text>My Memory App</Text>
            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateMemo')} />
            <View
                style={styles.memoItemContainer}
            >
                <View style={styles.memoItemIcon}></View>
                {memos.map(item => {
                    return (
                        <TouchableOpacity
                            style={styles.memoItem}
                            key={item.id}
                            onPress={() => navigation.navigate('Detail', { itemId: item.id })}
                        >
                            <View>
                                <Text style={styles.memoTitle}>📝 {item.title}</Text>
                            </View>

                            <View>
                                <Text style={styles.memoContent}>{item.content}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    memoItemContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    memoItemIcon: {

    },  

    memoItem: {
        width: '45%',
        height:  150,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#ededed',
        backgroundColor: '#ededed',
        margin: 5,
        borderRadius: 10,
    },

    memoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        textAlign: 'left',
        paddingLeft: 10,
    },

    memoContent: {
        paddingTop: 5,
        paddingLeft: 10
    },

    createButton: {
        position: 'absolute',
        flexDirection:'row',
        justifyContent: 'center', 
        bottom: 10,
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#BCCEF8'
    }
})
export default MainScreen
