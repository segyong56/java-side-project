import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailViewScreen = ({ route }) => {

    const { itemId } = route.params;

    const [memo, setMemo] = useState({})
    useEffect(() => {

        const fetchMemo = async () => {

            const { data } = await axios.get(`http://10.40.1.202:8080/board/view/${itemId}`)

            console.log(data)
            setMemo(data)
        }

        fetchMemo();
    }, [])

    const deleteMemo = async () => {

        const { status } = await axios.delete(`http://10.40.1.202:8080/board/delete/${itemId}`)
    }

    return (
        <View>
            <View style={styles.detailMemoContainer}>
                <View style={styles.titleContainer}>
                    <View >
                        <Text>Title</Text>
                    </View>
                    <View>
                        <Text>{memo.title}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View>
                        <Text>Content</Text>
                    </View>
                    <View>
                        <Text>{memo.content}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailMemoContainer: {

    },
    titleContainer: {

    },

    contentContainer: {

    }
})

export default DetailViewScreen
