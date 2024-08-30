import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {stateCodeToName} from '../Utils/CodeToName'


function TableData() {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data');
        const data = await response.json();

        const formattedData = Object.entries(data).map(([stateCode, details]) => {
          const { total, meta } = details;
          const confirmed = total?.confirmed || 0;
          const recovered = total?.recovered || 0;
          const deceased = total?.deceased || 0;
          const active = confirmed - (recovered + deceased);

          const stateName = stateCodeToName[stateCode] || null; // Get the state name or set it to null if not found

          return {
            stateName,
            confirmed,
            recovered,
            deceased,
            active,
            population: meta?.population || 'N/A',
          };
        }).filter(state => state.stateName); // Filter out entries with null or undefined stateName

        setStateData(formattedData);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    };

    fetchStateData();
  }, []);

  return (
    <AppContainer>
      <TableContainer>
        <StyledTable border="1" cellPadding="20">
          <thead>
            <tr>
              <StyledTh>State Name</StyledTh>
              <StyledTh>Confirmed</StyledTh>
              <StyledTh>Active</StyledTh>
              <StyledTh>Recovered</StyledTh>
              <StyledTh>Deceased</StyledTh>
              <StyledTh>Population</StyledTh>
            </tr>
          </thead>
          <tbody>
            {stateData.map((state) => (
              <tr key={state.stateName}>
                <StyledTd>{state.stateName}</StyledTd>
                <StyledTd>{state.confirmed}</StyledTd>
                <StyledTd>{state.active}</StyledTd>
                <StyledTd>{state.recovered}</StyledTd>
                <StyledTd>{state.deceased}</StyledTd>
                <StyledTd>{state.population}</StyledTd>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
     
    </AppContainer>
  );
}

export default TableData;

// Styled components

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #161625;
  overflow-x: hidden;
  
  margin: 0;
  padding:0;
`;

const TableContainer = styled.div`
  width: 90%; 
  overflow-x: hidden; 
  margin: 0 auto;
  padding-top: 10px;
  
  box-sizing: border-box; 
  @media (min-width: 300px) and (max-width: 950px) {
   
    overflow-x: auto;
    width: 95%;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border: 2px solid white;
  border-radius: 20px;
  background-color: #1e1e30;
  min-width: 600px; 


  @media (min-width: 300px) and (max-width: 950px) {
    min-width: 600px; 
  }
`;

const StyledTh = styled.th`
  color: white;
  border: none;
  text-align: start;
`;

const StyledTd = styled.td`
  border: none;

  &:first-child {
    color: white;
  }

  &:nth-child(2) {
    color: blue;
  }

  &:nth-child(3) {
    color: green;
  }

  &:nth-child(4) {
    color: red;
  }

  &:nth-child(5) {
    color: yellow;
  }

  &:nth-child(6) {
    color: lightgreen;
  }

  &:nth-child(7) {
    color: orange;
  }
  `;
