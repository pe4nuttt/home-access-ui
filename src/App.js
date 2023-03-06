import { Routes, Route, useNavigate } from 'react-router-dom';
import * as mqtt from 'mqtt';

import Layout from './components/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
import NotFound from './components/NotFound';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMqttMessage } from './redux/appSlice';
import accessSlice from './components/Layout/components/AccessControlModals/accessSlice';
import { subscribeToTopic } from './utils/mqtt';

// let client = mqtt.connect('ws://95.217.121.243:15675/ws', {
//     keepalive: 60,
//     clientId: 124231,
//     protocolId: 'MQTT',
//     protocolVersion: 4,
//     clean: true,
//     username: 'masterpi',
//     password: 'masterpi',
//     reconnectPeriod: 1000,
//     connectTimeout: 30 * 1000,
//     will: {
//         topic: 'WillMsg',
//         payload: 'Connection Closed abnormally..!',
//         qos: 0,
//         retain: false,
//     },
// });

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        subscribeToTopic();

        // client.subscribe('I5-1510', { qos: 0 }, (error) => {
        //     if (error) {
        //         console.log('Subscribe to topics error', error);
        //         return;
        //     }
        // });
        // client.on('message', (topic, message, packet) => {
        //     const mqttMsgObject = JSON.parse(message.toString().replace(/'/g, '"'));
        //     console.log(mqttMsgObject);
        //     dispatch(setMqttMessage(mqttMsgObject));

        //     if (mqttMsgObject.MQTT_STATUS == 1) {
        //         dispatch(accessSlice.actions.setIsCallingModal(true));
        //     } else if (mqttMsgObject.MQTT_STATUS == 5) {
        //         dispatch(accessSlice.actions.setIsAccessSucessModal(true));
        //     }
        // });
    });
    return (
        <div id="app">
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((route) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                // <PrivateRoute>
                                <Layout>
                                    <Page />
                                </Layout>
                                // </PrivateRoute>
                            }
                        />
                    );
                })}

                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
