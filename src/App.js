import { Routes, Route, useNavigate } from 'react-router-dom';
import * as mqtt from 'mqtt';
import { io } from 'socket.io-client';
import { MqttClient } from 'mqtt';

import Layout from './components/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
import NotFound from './components/NotFound';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMqttMessage } from './redux/appSlice';
import accessSlice from './components/Layout/components/AccessControlModals/accessSlice';

// const client = io('http://localhost:1883/');
// client.on('connect', () => {
//     client.emit('subscribe', { topic: 'OT' });
// });

// client.on('mqtt', (event) => {
//     // event.topic
//     // event.message
// });

// const mqtt = new MqttClient();
let client = mqtt.connect('ws://broker.emqx.io:8083/mqtt', {
    keepalive: 60,
    clientId: 124231,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false,
    },
});

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(client);
        client.subscribe('Iot4', { qos: 0 }, (error) => {
            if (error) {
                console.log('Subscribe to topics error', error);
                return;
            }
        });
        // client.publish('Iot4', 'dm toan connection demo123...!', { qos: 0, retain: false });
        client.on('message', (topic, message, packet) => {
            // console.log('Received message: ' + message.toString() + '\nOn topic: ' + topic);
            console.log(JSON.parse(message.toString()));
            console.log(packet);
            const mqttMsgObject = JSON.parse(message.toString());

            dispatch(setMqttMessage(mqttMsgObject));
            dispatch(accessSlice.actions.setIsCallingModal(true));
        });
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
