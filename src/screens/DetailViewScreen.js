import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DetailViewScreen = ({ route, navigation }) => {

    const { itemId } = route.params;

    const [memo, setMemo] = useState({
        title: '',
        content: ''
    })
    useEffect(() => {

        const fetchMemo = async () => {

            const { data } = await axios.get(`http://192.168.35.130:8080/board/view/${itemId}`)


            if (data) {
                setMemo(data)
                console.log(memo)
            }
        }
        fetchMemo();

    }, [])

    const deleteMemo = async () => {

        const { status } = await axios.get(`http://192.168.35.130:8080/board/delete/${itemId}`)
        console.log(status)
        navigation.navigate('Home', { success: true })

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', padding: 10 }} >
                    <View>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end'}} onPress={() => navigation.navigate("ModifyMemo", { itemId: itemId})}>
                            <View style={{ marginRight: 10, width: 120, borderRadius: 30, backgroundColor: "#f7df4c", paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>수정하기 📝</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-end' }} onPress={deleteMemo}>
                            <View style={{ marginRight: 10, width: 120, borderRadius: 30, backgroundColor: "#f7df4c", paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>삭제하기 🗑</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.detailMemoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{memo.title} </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>{memo.content}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'right',
        marginTop: 20,
    },
    detailMemoContainer: {
        marginTop: 10,
        backgroundColor: '#ebece9',
        width: '90%',
        height: '80%',
        borderRadius: 20,
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },


    titleContainer: {
        height: 75,
        lineHeight: 80,
        padding: 10,
        borderBottomColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
    },

    title: {
        lineHeight: 60,
        fontSize: 24,
        textAlign: 'center'
    },

    contentContainer: {
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 20,
        height: '80%',
        padding: 10,
    },

    content: {
        fontSize: 18,
    },
    deleteButton: {
        paddingRight: 10,
        borderRadius: 30,
        position: 'absolute',
        bottom: 100,
        zIndex: 9,
    }
})

export default DetailViewScreen
