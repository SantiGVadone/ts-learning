import type { newDiaryEntry, DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types.js';
export declare const getEntries: () => DiaryEntry[];
export declare const findById: (id: number) => NonSensitiveInfoDiaryEntry | undefined;
export declare const getEntriesWithOutSensitiveInfo: () => NonSensitiveInfoDiaryEntry[];
export declare const addDiary: (newDiaryEntry: newDiaryEntry) => DiaryEntry;
//# sourceMappingURL=diaryServices.d.ts.map