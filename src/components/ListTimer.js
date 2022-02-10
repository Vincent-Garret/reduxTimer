import React from 'react'
import { Image, SafeAreaView, StyleSheet, ScrollView, StatusBar, Text, TextInput, View, Button, FlatList, RefreshControl, Pressable, ActivityIndicator, Switch, Platform, AppState, Vibration, Alert, Modal } from 'react-native';
import { useSelector } from 'react-redux'
import { selectTimer } from '../actions'
import TimerView from '../TimerView'


export default function ListTimers() {
    const timers = useSelector(state => state.timers)

    return (
        <View>
            {timers.map((timer, i) => {
                return (
                    <TimerView 
                        key={`timer-${i}`} 
                        timer={timer} 
                        index={i} 
                    />
                )
            })}
        </View>
    )
}