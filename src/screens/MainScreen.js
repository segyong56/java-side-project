import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';


const MainScreen = ({ navigation }) => {



    const [memos, setMemos] = useState([]);

    const isFocused = useIsFocused();
    const fetchMemos = async () => {
        const { data } = await axios.get("http://192.168.35.130:8080/board/list")
        console.log(data)
        setMemos(data);
    }
    
    useEffect(() => {
 
        fetchMemos();
       
    }, [isFocused])



    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 60, flexDirection: 'colums', textAlign: 'center' }}>
                <Text style={{ fontSize: 40, textAlign: 'center' }}>All notes</Text>
                <Text style={{ textAlign: 'center', paddingTop: 5 }}>{memos.length} notes</Text>
            </View>
            <View>

            </View>
            <Button style={styles.createButton} title="+" onPress={() => navigation.navigate('CreateMemo')} />
            <View
                style={styles.memoItemContainer}
            >
                <View style={styles.memoItemIcon}></View>
                {memos && memos.map(item => {
                    return (
                        <TouchableOpacity
                            style={styles.memoItem}
                            key={item.id}
                            onPress={() => navigation.navigate('Detail', { itemId: item.id })}
                        >
                            <View>
                                <Text style={{ paddingRight: 10, textAlign: 'right' }}>📝</Text>
                            </View>
                            <View>
                                <Text style={styles.memoTitle}> {item.title}</Text>
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
        height: 200,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#ededed',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 15,
    },

    memoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        textAlign: 'left',
        textAlign: 'center'
    },

    memoContent: {
        paddingTop: 5,
        paddingLeft: 10
    },

    createButton: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 10,
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#BCCEF8',
        
    }
    
})
export default MainScreen
