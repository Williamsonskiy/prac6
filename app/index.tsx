import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { Habit } from './storage'

export default function Index() {
  const router = useRouter()
  
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, title: 'Прочитать книгу', done: false },
    { id: 2, title: 'Сделать зарядку', done: false },
  ])

  function toggleHabit(id: number) {
    const updated = habits.map(h =>
      h.id === id ? { ...h, done: !h.done } : h
    )
    setHabits(updated)
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
      <View
        style={{
          marginBottom: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: '800',
            color: '#18181b',
            flex: 1,
          }}
        >
          Отслеживание привычек
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/create')}
          style={{
            backgroundColor: '#000',
            width: 52,
            height: 52,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 28,
              fontWeight: '700',
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => toggleHabit(item.id)}
            style={{
              borderRadius: 24,
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginBottom: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
              backgroundColor: item.done ? '#f0fdf4' : '#ffffff',
              borderColor: item.done ? '#bbf7d0' : '#e4e4e7',
            }}
          >
            <View style={{ flex: 1, paddingRight: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: item.done ? '#a1a1aa' : '#18181b',
                  textDecorationLine: item.done ? 'line-through' : 'none',
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: item.done ? '#16a34a' : '#a1a1aa',
                }}
              >
                {item.done ? 'Сделано' : 'В процессе'}
              </Text>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 999,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item.done ? '#22c55e' : '#e4e4e7',
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 18 }}>
                {item.done ? '✓' : ''}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}