import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () => (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <ActivityIndicator 
            size={50} 
            >
        </ActivityIndicator>
    </View>
);

export default Loader;