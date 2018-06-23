import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ColorPalette from '../../constants/ColorPalette'
import AppointmentListItem from './AppointmentListItem';

const Table = styled.table`
  width: 90%;
	border-spacing: 0;
	border-collapse: separate;
	table-layout: fixed;
	margin-bottom: 30px;
`;

const TableTH = styled.th`
  color: ${ ColorPalette.primary };
  color: ${ ColorPalette.linksHover };
	padding: 0.5em;
	overflow: hidden;
	
	&:first-child{
		border-radius:3px 0 0 0;
	} 
	&:last-child{
		border-radius:0 3px  0 0;
	}
`;

const Day = styled.span`
	display: block;
	font-size: 1.2em;
	border-radius: 50%;
	width: 20px;
	height: 20px;
  margin: 0 auto 5px;
	padding: 5px;
	line-height: 1.8;

  &.active{
		background: @light;
		color: @blue;
	}
`;

const Short = styled.span`
  display: none;
`;

const Long = styled.span`
  display: none;
`;

const TBodyTR = styled.tr`
  background-color: ${ ColorPalette.linksHover };

  &:nth-child(odd){
    background-color: ${ ColorPalette.contentBackground };
	}
	&:nth-child(4n+0){
		td{
			border-bottom:1px solid ${ ColorPalette.primary };
		}
	}
`;

const TBodyTRTD = styled.td`
  text-align: center;
	vertical-align: middle;
	border-left: 1px solid ${ ColorPalette.primary };
  position: relative;
	height: 22px;
	cursor: pointer;

  &:last-child{
		border-right:1px solid ${ ColorPalette.primary };
	}
`;

const TBodyTRHour = styled.td`
  font-size: 1.5em;
	padding: 0;
	color: ${ ColorPalette.primary };
	background:#fff;
  border-bottom:1px solid ${ ColorPalette.primary };
	border-collapse: separate;
	min-width: 100px;
	cursor: default;
`;

const TBodyTRHourSpan = styled.span`
  transform:rotate(270deg);
  -webkit-transform:rotate(270deg);
  -moz-transform:rotate(270deg);
`;

const sampleAppointment1 = {
  doctorName: 'Dr Saner Turhaner',
  patientName: 'Roxhens Meraj',
  illness: 'Depression based on anxiety and discomfort',
  date: '2018-06-25',
  time: '11:00',
  appointment_id: '123456789'
};

const sampleAppointment2 = {
  doctorName: 'Dr Saner Turhaner',
  patientName: 'Sebastian Speth',
  illness: 'Mind frecking panic attacks',
  date: '2018-06-25',
  time: '13:00',
  appointment_id: '123456780'
};

class ScheduleOfAppoinments extends Component {
  render() {
    return (
        <Table>
          <thead>
            <tr>
              <TableTH></TableTH>
              <TableTH>
                <Day>1</Day>
                <Long>Monday</Long>
                <Short>Mon</Short>
              </TableTH>
              <TableTH>
                <Day>2</Day>
                <Long>Tuesday</Long>
                <Short>Tue</Short>
              </TableTH>
              <TableTH>
                <Day>3</Day>
                <Long>Wendsday</Long>
                <Short>We</Short>
              </TableTH>
              <TableTH>
                <Day>4</Day>
                <Long>Thursday</Long>
                <Short>Thur</Short>
              </TableTH>
              <TableTH>
                <Day>5</Day>
                <Long>Friday</Long>
                <Short>Fri</Short>
              </TableTH>
              <TableTH>
                <Day>6</Day>
                <Long>Saturday</Long>
                <Short>Sat</Short>
              </TableTH>
              <TableTH>
                <Day>7</Day>
                <Long>Sunday</Long>
                <Short>Sun</Short>
              </TableTH>
            </tr>
          </thead>

          <tbody>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>09:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>10:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>

            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>11:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>12:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>13:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>14:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>15:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRHour rowSpan="4"><TBodyTRHourSpan>16:00</TBodyTRHourSpan></TBodyTRHour>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
            <TBodyTR>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
              <TBodyTRTD></TBodyTRTD>
            </TBodyTR>
          </tbody>
        </Table>
    );
  }
}

export default ScheduleOfAppoinments;
