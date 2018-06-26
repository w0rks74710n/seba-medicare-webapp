import React, {Component} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {TimePicker, Button} from 'antd';
import moment from 'moment';
import '../../../node_modules/antd/dist/antd.css';
import "../../../node_modules/react-day-picker/lib/style.css";


const MakeAppointmentStyle = styled.div`
    heigth:800px;
    width:100%
    
`;

class MakeAppointment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
                <MakeAppointmentStyle>
                    <MakeAppointmentInputArea name={this.props.name}/>
                </MakeAppointmentStyle>
            </div>
        );
    }
}


const MakeAppointmentInputAreaStyle = styled.div`
    height:800px;
    width:800px;
    margin:0 auto;
    
`

//this is not the css for the actual DayPicker!
const DayPickerDivStyle = styled.div` 
    
    position: relative; 
    left:130px;
    top:-32px;
    width:300px;
`

class DoctorAppointmentForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }

    handleDayClick(day, {selected, disabled}) {
        if (disabled) {
            return;
        }

        if (selected) {
            this.setState({selectedDay: undefined,});
            return;
        }

        this.setState({selectedDay: day});
    }

    render() {
        return (
            <MakeAppointmentInputAreaStyle>
                <NewAppointmentWith name={this.props.name}/>
                <SpanStyle1>1</SpanStyle1>
                <DayPickerDivStyle>
                    <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay} disabledDays={{daysOfWeek: [0]}}/>
                </DayPickerDivStyle>
                <SpanStyle2>2</SpanStyle2>
                <TimePickerStyle>
                    <TimePickerAddon/>
                </TimePickerStyle>
                <FurtherDescriptionForm/>
            </MakeAppointmentInputAreaStyle>
        );
    }

}

const TimePickerStyle = styled.div`
    position:relative;
    top:-331px;
    left:515px;
`

const format = 'HH:mm';

class TimePickerAddon extends React.Component {
    state = {open: false};

    handleOpenChange = (open) => {
        this.setState({open});
    }

    handleClose = () => this.setState({open: false})

    render() {
        return <TimePicker
            open={this.state.open}
            onOpenChange={this.handleOpenChange}
            defaultValue={moment('12:00', format)}
            format={format}
            addon={() => (
                <Button size="large" type="primary" onClick={this.handleClose}>
                    Ok
                </Button>
            )}
        />;
    }
}

const NewAppointmentWithStyle = styled.div`
    heigth:100px;
    
    font-size:1.8em;
    text-align: center;
    margin:20px 0 30px 0;
`

function NewAppointmentWith(props) {
    return (
        <NewAppointmentWithStyle>New Appointment with {props.name}</NewAppointmentWithStyle>
    );
}


const FormStyle = styled.div`
    position:relative;
    top:-65px;
    max-width: 600px;
    padding: 10px 20px;
    background: #f4f7f8;
    margin: 0px auto;
    background: #f4f7f8;
    border-radius: 8px;
    font-family: Georgia, "Times New Roman", Times, serif;
`

const FieldSetStyle = styled.fieldset`
    border: none;
`

const LegendStyle = styled.legend`
    font-size: 1.4em;
    margin-bottom: 10px;
`

const LabelStyle = styled.label`
    display: block;
    margin-bottom: 8px;
`

const SpanStyle = styled.span`
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 0px;
`

const SpanStyle1 = styled.span`
    position: relative;
    left:105px;
    top:20px;
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 15px;
`

const SpanStyle2 = styled.span`
    position: relative;
    left:465px;
    top:-300px;
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 15px;
`

const TextAreaStyle = styled.textarea`
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
    &:focus {
        background: #d2d9dd;
    }
`

const InputStyle = styled.input`
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #FFF;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 50%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
    &:hover {
        background: #109177;
    }
`

const InputTextStyle = styled.input`
    font-family: Georgia, "Times New Roman", Times, serif;
    background: rgba(255,255,255,.1);
    border: none;
    border-radius: 4px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    padding: 7px;
    width: 100%;
    box-sizing: border-box; 
    background-color: #e8eeef;
    color:#8a97a0;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 30px;
`

class FurtherDescriptionForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormStyle>
                <form>
                    <FieldSetStyle>
                        <LegendStyle><SpanStyle className="number">3</SpanStyle>Mobile</LegendStyle>
                        <InputTextStyle type="text" name="field1" placeholder="Mobile Number"/>
                    </FieldSetStyle>
                    <FieldSetStyle>
                        <LegendStyle><SpanStyle className="number">4</SpanStyle>Describe Reason</LegendStyle>
                        <TextAreaStyle name="field2" placeholder="Describe your concern in more detail"></TextAreaStyle>
                    </FieldSetStyle>
                    <InputStyle type="submit" value="Send"/>
                </form>
            </FormStyle>
        );
    }

}

export default DoctorAppointmentForm;