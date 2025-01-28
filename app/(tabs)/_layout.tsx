import {Tabs} from 'expo-router'

// https://docs.expo.dev/router/advanced/tabs/

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name='(home)' options={{headerShown: false }} />
            <Tabs.Screen name='settings' />
        </Tabs>
    );
}