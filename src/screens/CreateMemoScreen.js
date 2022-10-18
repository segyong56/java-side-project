import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CreateMemoScreen = ({ navigation }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleHandler = (e) => {

        const title = e.nativeEvent.text
        setTitle(title)
    }

    const contentHandler = (e) => {
        const content = e.nativeEvent.text
        setContent(content)
    }

    const createMemo = async () => {
        console.log(title, content)
        const memoData = {
            title: title,
            content: content
        }
        const { status } = await axios.post("http://192.168.35.130:8080/board/writedo", memoData);
        navigation.navigate('Home')
    }
    return (
        <View style={{ height: '100%', padding: 10, backgroundColor: '#fff' }}>
            <Text style={{ padding: 20, fontSize: 24 }}>📝 New memo</Text>
            <View style={styles.memoFormContainer}>
                <View style={{ paddingTop: 10, paddingLeft: 10, borderRadius: 10, height: 50, marginTop: 10, backgroundColor: '#fff' }}>
                    <TextInput placeholder='title' value={title} onChange={titleHandler} />
                </View>
                <View style={{ paddingTop: 10, paddingLeft: 10, borderRadius: 10, height: '75%', marginTop: 10, backgroundColor: '#fff' }}>
                    <TextInput placeholder='write content'  multiline={true} value={content} onChange={contentHandler} />
                </View>
                <TouchableOpacity title="Save" onPress={createMemo} style={styles.saveButton} >
                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: 'bold', lineHeight: 40}}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    memoFormContainer: {
        backgroundColor: '#ebece9',
        height: '80%',
        padding: 20,
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },

    saveButton: {
        height: 40,
        backgroundColor: '#f7df4c',
        borderRadius: 10,
        marginTop: 10,
    }
})
export default CreateMemoScreen
