import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FooterDiv = styled.div`
    bottom: 0px;
	border-top: 1px solid black;
    padding: 5px;
	background: -webkit-linear-gradient(45deg, #f5fafd, #bdf9d3);
	
    height: auto;
    width: 100%;		
    display: flex;
    flex-flow: row nowrap;		
`;

const Copyrights = styled.p`
	order: 1;
    margin: auto;
    margin-left: 75px;
        
	font-famiy: Calibri Light;
	font-style: normal;
    font-size: 12px;
	color: #424242;
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
	
	font-famiy: Calibri Light;
	font-style: normal;
    font-size: 14px;
	color: #424242;
`;

const Terms_Privacy_Item = styled.li`
	display: inline-block;	
	list-style: none;	
	text-decoration: none;
	
	padding-left: 15px;
	
	font-famiy: Calibri Light;
	font-style: normal;
    font-size: 14px;
	color: #424242;
	
	&:hover {
        color: #ea7c41;
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
