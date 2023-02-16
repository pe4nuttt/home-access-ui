import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: { mqttMessage: {} },
    reducers: {
        setMqttMessage(state, action) {
            state.mqttMessage = action.payload;
        },
    },
});

const { reducer, actions } = appSlice;

export const { setMqttMessage } = actions;

export default appSlice;
