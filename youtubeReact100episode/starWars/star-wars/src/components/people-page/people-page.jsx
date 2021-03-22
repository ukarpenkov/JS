import React from 'react';
import SwapiService from '../../services/swapi-serwice';
import ErrorBoundary from '../error-boundary/error-boundary';
import ErrorIndication from '../error-indication/error-indication';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import Row from '../row/row';



export default class PeoplePage extends React.Component {
    swapiService = new SwapiService()
    state = {
        selectedPerson: 3,

    }



    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndication />
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
            >
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={this.state.selectedPerson} />
            </ErrorBoundary>
        )
        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}