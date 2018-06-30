import React from 'react';
import styled from 'styled-components';
import logoTUM from '../../resources/Logo_KlinikumRechtsDerIsar.svg';
import logoLMU from '../../resources/Logo_LMUKlinikum.png';
import ColorPalette from "../../constants/ColorPalette";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MapPartnerSidebarContainer = styled.div`
  height: 754px;
  width: 300px;
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
    bottom: -200px;
`;



class MapSidebar extends React.Component {

    constructor(props) {
        super(props);
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

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `440px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
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