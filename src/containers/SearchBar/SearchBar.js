import React from 'react';
import styled from 'styled-components';
import Autosuggest from "react-autosuggest";
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import "../../constants/searchBarLandingPage.css"
import "../../constants/locationSearchLandingPage.css"
import ColorPalette from '../../constants/ColorPalette'


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
    top: -66px;
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
    background-color: ${ColorPalette.primary};
    &:hover{
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    }
`;

const DoctorSearchCont = styled.div`
    position:relative;
    top: 5px;
    left: 279px;
    height:40px;
`;

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SearchBarCont>
                <DoctorSearchCont>
                    <DoctorSearch/>
                </DoctorSearchCont>
                <LocationInputCont>
                    <LocationSearch/>
                </LocationInputCont>
                <SearchButton type="submit" value="Search" onClick={() => this.props.retrieveSearchBarState(searchQuery)}/>
            </SearchBarCont>
        )
    }
}

export default SearchBar;

var searchQuery = {
    doctorType: 'noPreference',
    ZIP: 80333,
    latitude: null,
    longitude: null
};

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

class DoctorSearch extends React.Component {

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
        newValue === '' ? newValue = 'noPreference' : newValue;
        searchQuery.doctorType = newValue;
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
        this.state = {
            address: '',
            errorMessage: '',
            latitude: null,
            longitude: null,
            isGeocoding: false,
            loading: true,
            data:[]
        };
    }

    handleChange = (address) => {
        this.setState({
            address,
            latitude: null,
            longitude: null,
            errorMessage: '',
        });
    };

    handleSelect = selected => {
        this.setState({ isGeocoding: true, address: selected });
        geocodeByAddress(selected)
            .then(res => getLatLng(res[0]))
            .then(({ lat, lng }) => {
                this.setState({
                    latitude: lat,
                    longitude: lng,
                    isGeocoding: false,
                });
                searchQuery.longitude = lng;
                searchQuery.latitude = lat;
            })
            .catch(error => {
                this.setState({ isGeocoding: false });
                console.log('error', error); // eslint-disable-line no-console
            });
    };

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