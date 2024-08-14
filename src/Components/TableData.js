import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Mapping of state codes to state names
const stateCodeToName = {
  "AN": "Andaman and Nicobar Islands",
  "AP": "Andhra Pradesh",
  "AR": "Arunachal Pradesh",
  "AS": "Assam",
  "BR": "Bihar",
  "CH": "Chandigarh",
  "CT": "Chhattisgarh",
  "DL": "Delhi",
  "DN": "Dadra and Nagar Haveli and Daman and Diu",
  "GA": "Goa",
  "GJ": "Gujarat",
  "HP": "Himachal Pradesh",
  "HR": "Haryana",
  "JH": "Jharkhand",
  "JK": "Jammu and Kashmir",
  "KA": "Karnataka",
  "KL": "Kerala",
  "LA": "Ladakh",
  "LD": "Lakshadweep",
  "MH": "Maharashtra",
  "ML": "Meghalaya",
  "MN": "Manipur",
  "MP": "Madhya Pradesh",
  "MZ": "Mizoram",
  "NL": "Nagaland",
  "OR": "Odisha",
  "PB": "Punjab",
  "PY": "Puducherry",
  "RJ": "Rajasthan",
  "SK": "Sikkim",
  "TG": "Telangana",
  "TN": "Tamil Nadu",
  "TR": "Tripura",
  "UP": "Uttar Pradesh",
  "UT": "Uttarakhand",
  "WB": "West Bengal"
};

function TableData() {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
        const data = await response.json();

        const formattedData = Object.entries(data).map(([stateCode, details]) => {
          const { total, meta } = details;
          const confirmed = total?.confirmed || 0;
          const recovered = total?.recovered || 0;
          const deceased = total?.deceased || 0;
          const active = confirmed - (recovered + deceased);

          return {
            stateName: stateCodeToName[stateCode],
            confirmed,
            recovered,
            deceased,
            active,
            population: meta?.population || 'N/A',
          };
        });

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
`;

const TableContainer = styled.div`
  width: 70%;
  overflow-x: auto; /* Enable horizontal scroll */
  margin: auto;
  padding-top: 10px;
  padding-left: 25px;
  box-sizing: border-box; /* Ensure padding and border are included in the width calculation */

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0; /* Remove extra padding on smaller screens */
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border: 2px solid white;
  border-radius: 20px;
  background-color: #1e1e30;
  min-width: 600px; /* Prevent the table from shrinking too much */

  @media (max-width: 768px) {
    min-width: 100%; /* Ensure the table takes up full width on smaller screens */
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