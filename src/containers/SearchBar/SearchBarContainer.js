import React from 'react';
import styled from 'styled-components';
import Autosuggest from "react-autosuggest";
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import "../../constants/searchBarDoctor.css"
import "../../constants/locationSearchDoctor.css"

const SearchBarCont = styled.div`
    height: 55px;
    width: auto;
`;

const LocationInputCont = styled.div`
    position:relative;
    top: -25px;
    left: 545px;
    height: 40px;
    width: 210px;  
`;

const SearchButton = styled.input`
    position:relative;
    top: -65px;
    left: 751px;
    font-family: Helvetica, sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100px;
    box-sizing: border-box; 
    background-color: #0045AB;
    &:hover{
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    }
`;

class SearchBarContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SearchBarCont>
                <SearchBar/>
                <LocationInputCont>
                    <LocationSearch/>
                </LocationInputCont>
                <SearchButton type="submit" value="Search"/>
            </SearchBarCont>
        )

    }

}

export default SearchBarContainer;


const doctors = [
    {
        name: 'general practitioner',
    },
    {
        name: 'dentist',
    },
    {
        name: 'sports physician',
    },
    {
        name: 'eye doctor',
    },
    {
        name: 'pediatrician',
    },
    {
        name: 'ENT physician',
    },
    {
        name: 'orthopedist',
    },
    {
        name: 'psychologist',
    },
    {
        name: 'gynecologist',
    },
    {
        name: 'urologist',
    },
    {
        name: 'radiologist',
    },
    {
        name: 'neurologist',
    },
];

const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return doctors.filter(doctor => regex.test(doctor.name));
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => suggestion.name;

const renderSuggestionsContainer = ({ containerProps, children, query }) => (
    <div {...containerProps}>
        {children}
        {
            <div className="footer">
                Select one recommendation please
            </div>
        }
    </div>
);

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

class SearchBar extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue,method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: "Doctor",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                renderSuggestionsContainer={renderSuggestionsContainer}
            />
        );
    }
}


class LocationSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { address: '' }
    }

    handleChange = (address) => {
        this.setState({ address })
    }

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Places',
                                className: 'location-search-input'
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className})}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}