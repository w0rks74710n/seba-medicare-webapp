/*global google*/

import React from 'react';
import styled from 'styled-components';
import logoTUM from '../../resources/Logo_KlinikumRechtsDerIsar.svg';
import logoLMU from '../../resources/Logo_LMUKlinikum.png';
import ColorPalette from "../../constants/ColorPalette";
import { compose, withProps, withHandlers, withState, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";


const MapPartnerSidebarContainer = styled.div`
  height: 794px;
  width: 350px;
  z-index: 1;
  top: 0;
  float:right;
  background-color: ${ColorPalette.primaryBackGorundContainer};
  overflow-x: hidden;
  margin: 10px;
  border-radius: 2px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left:10px;
  box-shadow: -2px 1px 1px rgba(0,0,0,.2)
`;

const MapContainer = styled.div`
    background-color: green;
    height:440px
    width:100%;
`;

const PartnersContainer = styled.div`
    position: absolute;
    bottom: -162px;
`;



class MapSidebar extends React.Component {

    constructor(props) {
        super(props);
        longLatObject.longitude = this.props.longQuery;
        longLatObject.latitude = this.props.latQuery;

        if (this.props.doctorQuery == 'noPreference'){
            doctorType = 'doctor';
        } else {
            doctorType = this.props.doctorQuery;
        }
    }

    render() {
        return (
            <MapPartnerSidebarContainer>
                <MapContainer>
                    <MapViewDoctorSearch/>
                </MapContainer>
                <PartnersContainer>
                    <Partners/>
                </PartnersContainer>
            </MapPartnerSidebarContainer>
        )
    }
}

export default MapSidebar;

const PartnerPar = styled.p`
    font-weight: 600;
    font-size: 17px;
`;

function Partners(props) {
    return (
        <div>
            <PartnerPar>
                <strong>Partners</strong>
            </PartnerPar>
            <a href="https://www.mri.tum.de/">
                <img src={logoTUM} alt="Klinikum rechts der Isar"/>
            </a>
            <p>
                <a href="https://www.klinikum.uni-muenchen.de/de/">
                    <img src={logoLMU} alt="Klinikum der Universtität München" />
                </a>
            </p>
        </div>
    )
}

var longLatObject = {
    latitude: null,
    longitude:null
};

var doctorType = '';

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCW0iwTytb3hDtAB_zpfMhUWDmZNDWIEs4&language=en&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `440px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withState('selectedPlace', 'updateSelectedPlace', null),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => {
                let places;
                const bounds = refs.map.getBounds();
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);

                var pyrmont = new google.maps.LatLng(longLatObject.latitude,longLatObject.longitude);

                const request = {
                    location: pyrmont,
                    radius: '500',
                    query: doctorType
                };

                service.textSearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                        updatePlaces(results);
                    }
                })
            },
            onToggleOpen: ({ updateSelectedPlace }) => key => {
                updateSelectedPlace(key);
            }

        }
    }),
)((props) =>
    <GoogleMap
        onTilesLoaded={props.fetchPlaces}
        ref={props.onMapMounted}
        onBoundsChanged={props.fetchPlaces}
        defaultZoom={16}
        defaultCenter={{ lat: longLatObject.latitude, lng: longLatObject.longitude }}
    >
        {props.places && props.places.map((place, i) =>
            <Marker onClick={() => props.onToggleOpen(i)} key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }}>
                {props.selectedPlace === i && <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>
                        {props.places[props.selectedPlace].name}
                    </div>
                </InfoWindow>}
            </Marker>
        )}


    </GoogleMap>
)

class MapViewDoctorSearch extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };

    componentDidMount() {
        this.delayedShowMarker()
    };

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    };

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}