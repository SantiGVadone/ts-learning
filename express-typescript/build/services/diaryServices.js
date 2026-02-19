import diaryData from './diaries.json' with { type: 'json' }; // hay que aclarar que es json sino da error
const diaries = diaryData;
export const getEntries = () => diaries;
export const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const { comment, ...restOfDiary } = entry;
        return restOfDiary;
    }
    return undefined;
};
export const getEntriesWithOutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
export const addDiary = (newDiaryEntry) => {
    const newDiary = {
        id: diaries.length + 1,
        ...newDiaryEntry
    };
    diaries.push(newDiary); // mando la  variable que tiene todos los datos a la db
    return newDiary; // una buena practica es que cuando se hace un post se devuelven los datos que se cargaron a la db
};
//# sourceMappingURL=diaryServices.js.map