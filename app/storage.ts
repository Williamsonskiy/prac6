import AsyncStorage from '@react-native-async-storage/async-storage'

export type Habit = {
  id: number
  title: string
  done: boolean
}

const STORAGE_KEY = 'habits'

export async function getHabits(): Promise<Habit[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY)

  if (!data) {
    return []
  }

  return JSON.parse(data)
}

export async function saveHabits(habits: Habit[]) {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(habits)
  )
}
