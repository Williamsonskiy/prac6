import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

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

      <View
        style={{
          alignItems: 'center',
          marginTop: 80,
        }}
      >
        <Text
          style={{
            color: '#a1a1aa',
            fontSize: 18,
          }}
        >
          Привычек пока нет
        </Text>
      </View>
    </View>
  )
}