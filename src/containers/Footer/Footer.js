import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'

const FooterDiv = styled.div`
    bottom: 0px;
	border-top: 1px solid black;
    padding: 5px;
	background: ${ ColorPalette.primary };
	
    height: auto;
    width: 100%;		
    display: flex;
    flex-flow: row nowrap;		
`;

const Copyrights = styled.p`
	order: 1;
    margin: auto;
    margin-left: 75px;
        
	font-style: normal;
    font-size: 12px;
	color: ${ ColorPalette.primaryNavigationText };
`;

const Terms_Privacy = styled.nav`
	order: 2;
	margin: auto;
    right: 50px;
`;

const Terms_Privacy_Divider = styled.li`
	display: inline-block;	
	list-style: none;	
	text-decoration: none;
	
	padding-left: 15px;
	
	font-style: normal;
    font-size: 14px;
	color: ${ ColorPalette.primaryNavigationText };
`;

const Terms_Privacy_Item = styled.li`
	display: inline-block;	
	list-style: none;	
	text-decoration: none;
	
	padding-left: 15px;
	
	font-style: normal;
    font-size: 14px;
	color: ${ ColorPalette.primaryNavigationText };
	
	&:hover {
        color: ${ ColorPalette.linksHover };
	}	
`;

class Footer extends Component {
    render() {
        return (
            <Router>
                <FooterDiv>
                    <Copyrights>© All Rights Reserved. 2018 MediCare GBMH.</Copyrights>
                    <Terms_Privacy>
                        <ul>
                            <Terms_Privacy_Item>Terms & Agreements</Terms_Privacy_Item>
                            <Terms_Privacy_Divider>|</Terms_Privacy_Divider>
                            <Terms_Privacy_Item>Privacy Policy</Terms_Privacy_Item>
                        </ul>
                    </Terms_Privacy>
                </FooterDiv>
            </Router>
        );
    }
}

export default Footer;
