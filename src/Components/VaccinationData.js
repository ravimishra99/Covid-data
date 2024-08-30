import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { stateCodeToName } from '../Utils/CodeToName'; 

const VaccinationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchVaccinationData = async () => {
      try {
        const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data');
        const result = await response.json();

        
        const formattedData = Object.entries(result).map(([stateCode, details]) => {
          const { total } = details;

        
          const vaccinated1 = total && total.vaccinated1 ? total.vaccinated1 : 0;
          const vaccinated2 = total && total.vaccinated2 ? total.vaccinated2 : 0;

          // Convert stateCode to stateName using the mapping
          const stateName = stateCodeToName[stateCode] || null; // Use stateCode if mapping not found

          return {
            stateName,
            vaccinated1,
            vaccinated2,
          };
        }).filter(state => state.stateName);

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching state data:', error);
      }
    };

    fetchVaccinationData();
  }, []);

  return (
  
      <TopContainer>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <Th>State Name</Th>
                <Th>Vaccinated 1</Th>
                <Th>Vaccinated 2</Th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((state) => (
                  <tr key={state.stateName}>
                    <Td>{state.stateName}</Td>
                    <Td>{state.vaccinated1}</Td>
                    <Td>{state.vaccinated2}</Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <Td colSpan="3">No vaccination data available</Td>
                </tr>
              )}
            </tbody>
          </StyledTable>
        </TableContainer>
      </TopContainer>
  
  );
}

export default VaccinationData;

// Styled components
const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #161625;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

const TableContainer = styled.div`
  width: 60%;
  overflow-x: hidden;
  margin: 0 auto;
  padding-top: 20px;
  box-sizing: border-box;

  @media (min-width: 300px) and (max-width: 950px) {
    overflow-x: auto;
    width: 80%;
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

const Th = styled.th`
  color: white;
  /* border: none; */
  padding: 10px;

  text-align: start;
`;

const Td = styled.td`
  border: none;
  padding-left: 10px;
 
  padding-top: 10px;

  &:first-child {
    color: white;
  }

  &:nth-child(2) {
    color: lightblue;
  }

  &:nth-child(3) {
    color: lightgreen;
  }
`;
