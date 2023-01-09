import { Routes, Route, useNavigate } from 'react-router-dom';
import * as mqtt from 'mqtt';
import { MqttClient } from 'mqtt';

import Layout from './components/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import { privateRoutes, publicRoutes } from './routes';
import NotFound from './components/NotFound';
import { useEffect } from 'react';

// const mqtt = new MqttClient();
let client = mqtt.connect('ws://broker.hivemq.com:1883', {
    clientId: 'mqttjs',
});

function App() {
    useEffect(() => {
        console.log(client);
    });
    return (
        <div id="app">
            <Routes>
                {publicRoutes.map((route) => {
                    const Page = route.component;

                    return <Route key={route.id} path={route.path} element={<Page />} />;
                })}

                {privateRoutes.map((route) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={
                                <PrivateRoute>
                                    <Page />
                                </PrivateRoute>
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
