import * as mqtt from 'mqtt';
import store from '@/redux/store';
import { setMqttMessage } from '@/redux/appSlice';
import accessSlice from '@/components/Layout/components/AccessControlModals/accessSlice';

const topic = 'I5-1510';

let client = mqtt.connect('ws://95.217.121.243:15675/ws', {
    keepalive: 60,
    clientId: 124231,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    username: 'masterpi',
    password: 'masterpi',
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false,
    },
});

export function subscribeToTopic() {
    client.subscribe(topic, { qos: 0 }, (error) => {
        if (error) {
            console.log('Subscribe to topics error', error);
            return;
        }
        console.log('Subcribe successfully');
    });
    client.on('message', (topic, message, packet) => {
        const mqttMsgObject = JSON.parse(message.toString().replace(/'/g, '"'));
        console.log(mqttMsgObject);

        store.dispatch(setMqttMessage(mqttMsgObject));

        if (mqttMsgObject.MQTT_STATUS == 1) {
            store.dispatch(accessSlice.actions.setIsCallingModal(true));
        } else if (mqttMsgObject.MQTT_STATUS == 5) {
            store.dispatch(accessSlice.actions.setIsAccessSucessModal(true));
        }
    });
}

export const publishToTopic = (message, mqttTopic = topic) => {
    console.log(message);
    client.publish(mqttTopic, message);
};
