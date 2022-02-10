import React, {  } from 'react'
import { useDispatch } from 'react-redux'
import { Image, SafeAreaView, StyleSheet, ScrollView, StatusBar, Text, TextInput, View, Button, FlatList, RefreshControl, Pressable, ActivityIndicator, Switch, Platform, AppState, Vibration, Alert, Modal } from 'react-native';
import { toggleTimer } from './actions'
import { formatTime } from './utils';

export default function TimerView(props) {
  const { index, timer } = props
  const dispatch = useDispatch()

  return (
    <View>
      <Text>{timer.name}</Text>
      <Text>{timer.time}</Text>
      <Button
        onClick={() => dispatch(toggleTimer(index))}
        title={timer.isRunning ? "Stop" : "Start"}
        />
      <Text>{formatTime(timer.time)}</Text>
      
    </View>
  )
}