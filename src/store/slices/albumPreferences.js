import { createSlice } from '@reduxjs/toolkit';
import { subtractFromDate } from '../../utils/datetime';

const albumPreferencesSlice = createSlice({
    name: 'albumPreferences',
    initialState: {
        dateRangeKey: null, // 'LAST_3_DAYS' || 'LAST_MONTH' || 'LAST_YEAR'  || 'CUSTOMIZED
        dateRange: {
            fromDate: null,
            toDate: null,
        },
        picturesCount: {
            key: null,
            count: -1,
        }
    },
    reducers: {
        selectDateRange: (state, action) => {
            let { dateRangeKey, fromDate, toDate } = action.payload;
            switch (dateRangeKey) {
                case 'LAST_3_DAYS': {
                    fromDate = subtractFromDate(new Date(), 3, 'day');
                    toDate = new Date();
                    break;
                }
                case 'LAST_MONTH': {
                    fromDate = subtractFromDate(new Date(), 1, 'month');
                    toDate = new Date();
                    break;
                }
                case 'LAST_YEAR': {
                    fromDate = subtractFromDate(new Date(), 1, 'year');
                    toDate = new Date();
                    break;
                }
            }
            state.dateRangeKey = dateRangeKey;
            state.dateRange.fromDate = fromDate.toString();
            state.dateRange.toDate = toDate.toString();
        },
        selectPicturesCount: (state, action) => {
            let { key, count } = action.payload;
            switch (key) {
                case 'PICK_30':
                    count = 30;
                    break;
                case 'PICK_60':
                    count = 60;
                    break;
                case 'PICK_100':
                    count = 100;
                    break;
            }
            state.picturesCount.key = key;
            state.picturesCount.count = count;
        },
    }
});

export const selectDateRange = albumPreferencesSlice.actions.selectDateRange;
export const selectPicturesCount = albumPreferencesSlice.actions.selectPicturesCount;
export default albumPreferencesSlice.reducer;

