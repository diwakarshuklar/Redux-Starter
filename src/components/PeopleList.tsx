import * as React from 'react';
import { FlatList, Text, View } from 'react-native';

interface Props {
    people: any[];
}

const _keyExtractor = (item, index) => item.name;

const Person = ({ data }) => (
    <View>
        <Text style={{marginVertical: 16, marginLeft: 16, color: 'green'}}>
            {`${data.name} | ${data.age}`}
        </Text>
    </View>
);

const PeopleList = ({people}: Props) => (
    <FlatList
        data={people}
        keyExtractor={_keyExtractor}
        renderItem={({item}) => <Person data={item}/>}
    />
);

export default PeopleList;