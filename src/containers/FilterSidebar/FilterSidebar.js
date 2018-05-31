import React from 'react';
import styled from 'styled-components';

const ChannelWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4e3a4c;
  color: #958993;
`;

export default ({ teamName, username, channels, users, }) => (
  <ChannelWrapper>
    <PushLeft>
      <TeamNameHeader>{teamName}</TeamNameHeader>
      {username}
    </PushLeft>
    <div>
      <SideBarList>
        <SideBarListHeader>Channels</SideBarListHeader>
        <SideBarListItem key={'channel-1'}># {'My Channel'}</SideBarListItem>
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader>Direct Messages</SideBarListHeader>
        {<SideBarListItem key={`user-2`}>
          <Bubble /> {'Marco'}
        </SideBarListItem>}
      </SideBarList>
    </div>
  </ChannelWrapper>
);