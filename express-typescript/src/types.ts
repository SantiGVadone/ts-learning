//  este fichero se supone que es lo mas comun
export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// esto es una mala practica
//           export interface NonSensitiveInfoDiaryEntry {
//             id: number
//             date: string
//             weather: Weather
//             visibility: Visibility
//           //  comment: string
//          }// si se quiere sacar el comment para hacer un nuevo tipo, esta no es la mejor forma, ESTO ESTA MAL
//
// LA FORMA CORRECTA DE HACERLO ES ASI :

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

// O LA OTRA FORMA CORRECTA DE HACERLO PUEDE SER ASI TAMBIEN

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// sigue el codigo
export type newDiaryEntry = Omit<DiaryEntry, 'id'>
