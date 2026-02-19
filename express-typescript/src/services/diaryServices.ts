//  import { type DiaryEntry, type NonSensitiveInfoDiaryEntry } from '../types.js' //esta es otra forma
import type { newDiaryEntry, DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types.js'

import diaryData from './diaries.json' with {type: 'json'} // hay que aclarar que es json sino da error

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => { // esto se tiene qeu hacer porque ts no sabe identificar si tiene que mandar el comment o no
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => { // recibe los valores
  const newDiary = { // creo una variable con todos los datos
    id: diaries.length + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary) // mando la  variable que tiene todos los datos a la db
  return newDiary // una buena practica es que cuando se hace un post se devuelven los datos que se cargaron a la db
}
