import React, { Component } from "react";
import styled from 'styled-components';
import background from '../../resources/landing1.jpg';
import {Link} from "react-router-dom";
import ColorPalette from "../../constants/ColorPalette";
import Autosuggest from "react-autosuggest";
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import "../../constants/searchBarDoctor.css";
import "../../constants/locationSearchDoctor.css";
import {Home} from "../../containers";


const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
`;

const SearchContainer = styled.div`
  display: flex row;
  z-index: 10;
  width: 50%;
  height: 30%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 150px;
  height: 40px;
  right: 10%;
  top: 80%;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
    
  -webkit-filter: blur(4px); 
  -moz-filter: blur(4px);
  -ms-filter: blur(4px); 
  -o-filter: blur(4px);
    
  transition: 1s filter linear;
  -webkit-transition: 0.3s -webkit-filter linear;
  -moz-transition: 0.3s -moz-filter linear;
  -ms-transition: 0.3s -ms-filter linear;
  -o-transition: 0.3s -o-filter linear;
    
  &:hover {
    -webkit-filter: blur(1px); 
    -moz-filter: blur(1px);
    -ms-filter: blur(1px); 
    -o-filter: blur(1px); 
  }
`;

const Title = styled.h1`
  z-index: 10;
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 4px #000;
  margin: auto;
  text-align: center;
`;

const Search = styled.div`  
  display: flex;
  z-index: 10;
  margin: auto;
  margin-top: 50px;
`;

const Input = styled.input`
  margin: auto;
  width: 50%;
  height: 50px;
  box-shadow: 1px 2px #999999;
  border: 1px solid black;
  border-radius: 15px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  
  &:focus {
    width: 80%;
  }
  
  &::placeholder {
    font-size: 16px;
    font-style: italic;
    color: #424242;
    margin: auto;
    padding-left: 20px;
  }
  
  &:[type=text]{
    font-size: 16px;
    font-style: italic;
    color: #424242;
    margin: auto;
    padding-left: 20px;
  }
`;

const SignInButton = styled(Link)`
  -webkit-order: 3;
  -ms-flex-order: 3;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  margin: 0;
  padding: 10px 25px;
  
  &:active {
    transform: translate(0px, 2px);
    -webkit-transform: translate(0px, 2px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  &:hover {
    background-color: #6FC6FF;
    cursor: pointer;
  }
`;

const TermsContainer = styled.div`  
  position: fixed;
  z-index: 10;
  width: 30%;
  height: 40px;
  left: 40%;
  top: 80%;
`;

const Paragraph = styled.p`
  text-align: justify;		
  text-justify: inter-word;
    
  font-famiy: Calibri Light;
	font-style: normal;
  font-size: 18px;
	color: #424242;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${ ColorPalette.primary };
  
  &:hover {
    font-style: italic;
    color: ${ ColorPalette.accent };
	}	
`;

const SearchBarCont = styled.div`
    position:relative;
    top: 30px;
    height: 55px;
    width: auto;
`;

const LocationInputCont = styled.div`
    position:relative;
    top: -25px;
    left: 265px;
    height: 40px;
    width: 210px;  
`;

const SearchButton = styled.input`
  position:relative;
  top: -66px;
  left: 471px;
  -webkit-order: 3;
  -ms-flex-order: 3;
  border: 0px solid black;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  margin: 0;
  padding: 6px 25px;
  
  &:active {
    transform: translate(0px, 2px);
    -webkit-transform: translate(0px, 2px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  &:hover {
    background-color: #6FC6FF;
    cursor: pointer;
  }
`;

class LandingPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            renderHome:false
        };
    }

    handleClick(){
        this.setState({
            renderHome:true
        });
    }

  render() {

      if (this.state.renderHome){
          return <Home doctorQuery={searchQueryLandingPage.doctorType} placeQuery={searchQueryLandingPage.ZIP}/>
      }

      return (
          <PageContainer>
            <Background src={background} alt="MediCare Landing Page" />
            <SearchContainer>
              <Title>MediCare</Title>
              <SearchBarLandingPage onSearchClick={this.handleClick.bind(this)}/>
            </SearchContainer>
            <ButtonContainer>
              <SignInButton to="/login">Login/Sign up</SignInButton>
            </ButtonContainer>
            <TermsContainer>
              <Paragraph>What is this all <NavLink to={""}>about?</NavLink> and <NavLink to={""}>Contact</NavLink></Paragraph>
            </TermsContainer>
          </PageContainer>
        );
  }
}

export default LandingPage;


class SearchBarLandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SearchBarCont>
                <DoctorSearchLandingPage/>
                <LocationInputCont>
                    <LocationSearchLandingPage/>
                </LocationInputCont>
                <SearchButton type="submit" value="Search" onClick={this.props.onSearchClick}/>
            </SearchBarCont>
        )
    }
}


var searchQueryLandingPage = {
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

class DoctorSearchLandingPage extends React.Component {

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
        searchQueryLandingPage.doctorType = newValue;
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


class LocationSearchLandingPage extends Component {

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
                searchQueryLandingPage.longitude = lng;
                searchQueryLandingPage.latitude = lat;
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