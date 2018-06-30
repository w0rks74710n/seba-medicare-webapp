import React from 'react';
import styled from 'styled-components';
import logoTUM from '../../resources/Logo_KlinikumRechtsDerIsar.svg';
import logoLMU from '../../resources/Logo_LMUKlinikum.png';


const MapPartnerSidebarContainer = styled.div`
  height: 697px;
  width: 300px;
  z-index: 1;
  top: 0;
  float:right;
  background-color: WhiteSmoke;
  overflow-x: hidden;
  padding-top: 10px;
  padding-right: 10px;
  padding-left:10px;
  box-shadow: -2px 1px 1px rgba(0,0,0,.2)
`;

const MapContainer = styled.div`
    background-color: green;
    height:400px
    width:100%;
`;

const PartnersContainer = styled.div`
    position: absolute;
    bottom: -80px;
`;



class MapSidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MapPartnerSidebarContainer>
                <MapContainer/>
                <PartnersContainer>
                    <Partners/>
                </PartnersContainer>
            </MapPartnerSidebarContainer>
        )

    }
}

export default MapSidebar;


function Partners(props) {
    return (
        <div>
            <p>
                <strong>Partners:</strong>
            </p>
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