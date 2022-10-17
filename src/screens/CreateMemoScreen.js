import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const CreateMemoScreen = ({ navigation }) => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleHandler = (e) => {

        const title =  e.nativeEvent.text
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
        const { status } = await axios.post("http://10.40.1.202:8080/board/writedo", memoData);
        navigation.navigate('Home')
    }
    return (
        <View>
            <Text>Create memo</Text>

            <View>
                <Text>Title</Text>
                <TextInput placeholder='title' value={title} onChange={titleHandler} />
            </View>

            <View>
                <Text>Content</Text>
                <TextInput placeholder='Content' value={content} onChange={contentHandler} />
            </View>
            <Button title="Save" onPress={createMemo} />
        </View>
    )
}

export default CreateMemoScreen
