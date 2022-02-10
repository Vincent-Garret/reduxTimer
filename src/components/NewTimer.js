import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Image, SafeAreaView, StyleSheet, ScrollView, StatusBar, Text, TextInput, View, Button, FlatList, RefreshControl, Pressable, ActivityIndicator, Switch, Platform, AppState, Vibration, Alert, Modal } from 'react-native';


import { addTimer } from '../actions'

export default function NewTimer() {
    const [ name, setName ] = useState('')
    const dispatch = useDispatch()

    return (
        <View>
            <TextInput
                type='text'
                placeholder="New Timer Name"
                value={name}
                onChangeText={name => setName(name)}/>
            <Button
                title="save"
                onPress={() => dispatch(addTimer(name))}
                />
            
        </View>
    )
}