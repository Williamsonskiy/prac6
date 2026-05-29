import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { useRouter } from 'expo-router'

import {
  getHabits,
  saveHabits,
} from './storage'

export default function CreateHabit() {
  const router = useRouter()

  const [text, setText] = useState('')

  async function addHabit() {
    if (!text.trim()) {
      return
    }

    const habits = await getHabits()

    const updated = [
      ...habits,
      {
        id: Date.now(),
        title: text,
        done: false,
      },
    ]

    await saveHabits(updated)

    router.back()
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f4f4f5',
        paddingHorizontal: 20,
        paddingTop: 64,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: '800',
          color: '#18181b',
          marginBottom: 24,
        }}
      >
        Новая привычка
      </Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Введите привычку..."
        placeholderTextColor="#9ca3af"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 16,
          paddingHorizontal: 20,
          paddingVertical: 18,
          fontSize: 16,
          borderWidth: 1,
          borderColor: '#e4e4e7',
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={addHabit}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#000000',
          borderRadius: 16,
          paddingVertical: 18,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: '700',
          }}
        >
          Сохранить
        </Text>
      </TouchableOpacity>
    </View>
  )
}
