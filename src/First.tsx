import * as React from 'react';
import { View, Text,  CheckBox, TouchableOpacity } from 'react-native';
import { PeopleList, Loader } from './components';
import { connect } from 'react-redux';
import { fetchPeople, toggleOver18 } from './actions/People';
import { filterOver18 } from './selectors';
import { lifecycle } from 'recompose';

interface Props {
    people: any;
    fetchPeople: Function;
    toggleOver18: Function;
};

const First = ({people, ...props }: Props) => (
    <View style={{flex: 1}}>
        {people.isLoading && <Loader/>}
        <View style={{flexDirection: 'row', margin: 16}}>
            <TouchableOpacity onPress={props.toggleOver18}
                style={{flexDirection: 'row'}}
                >
                <CheckBox 
                    value={people.checked}
                /> 
                <Text style={{paddingTop: 8}}>Over 18</Text>
            </TouchableOpacity>
        </View>
        <PeopleList people={people.people} />
    </View>
);

const EnhancedCom = lifecycle({
    componentDidMount () {
        this.props.fetchPeople();
    }
})(First);

const mapStateToProps = (store: any) => ({
    people: filterOver18(store.people)
});

const mapDispatchToProps = (dispatch) => ({
    fetchPeople () {
        dispatch(fetchPeople())
    },
    toggleOver18() {
        dispatch(toggleOver18())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedCom);