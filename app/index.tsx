import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { Habit } from './storage'

export default function Index() {
  const router = useRouter()
  
  const [habits] = useState<Habit[]>([
    { id: 1, title: 'Прочитать книгу', done: false },
    { id: 2, title: 'Сделать зарядку', done: false },
  ])

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
          <View
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
              backgroundColor: '#ffffff',
              borderColor: '#e4e4e7',
            }}
          >
            <View style={{ flex: 1, paddingRight: 16 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#18181b',
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  color: '#a1a1aa',
                }}
              >
                В процессе
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}