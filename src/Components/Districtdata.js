import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const stateNameToCode = {
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  'Andaman and Nicobar Islands': 'AN',
  'Assam': 'AS',
  'Bihar': 'BR',
  'Chandigarh': 'CH',
  'Chhattisgarh': 'CT',
  'Dadra and Nagar Haveli and Daman and Diu': 'DN',
  'Delhi': 'DL',
  'Goa': 'GA',
  'Gujarat': 'GJ',
  'Haryana': 'HR',
  'Himachal Pradesh': 'HP',
  'Jharkhand': 'JH',
  'Jammu and Kashmir': 'JK',
  'Karnataka': 'KA',
  'Kerala': 'KL',
  'Ladakh': 'LA',
  'Lakshadweep': 'LD',
  'Madhya Pradesh': 'MP',
  'Maharashtra': 'MH',
  'Manipur': 'MN',
  'Meghalaya': 'ML',
  'Mizoram': 'MZ',
  'Nagaland': 'NL',
  'Odisha': 'OR',
  'Puducherry': 'PY',
  'Punjab': 'PB',
  'Rajasthan': 'RJ',
  'Sikkim': 'SK',
  'Tamil Nadu': 'TN',
  'Telangana': 'TG',
  'Tripura': 'TR',
  'Uttar Pradesh': 'UP',
  'Uttarakhand': 'UT',
  'West Bengal': 'WB'
};

function DistrictData() {
    const { stateName } = useParams();
    const [districtData, setDistrictData] = useState(null);

    useEffect(() => {
        const fetchDistrictData = async () => {
            try {
                const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
                const jsonData = await response.json();

                const stateCode = stateNameToCode[stateName];
                if (jsonData && stateCode && jsonData[stateCode]) {
                    setDistrictData(jsonData[stateCode]?.districts || {});
                } else {
                    setDistrictData(null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDistrictData();
    }, [stateName]);

    return (
        <AppContainer>
            <Heading>District-wise Data for {stateName}</Heading>
            <StyledTable border="1" cellPadding="20">
                <thead>
                    <tr>
                        <StyledTh>District</StyledTh>
                        <StyledTh>Confirmed</StyledTh>
                        <StyledTh>Recovered</StyledTh>
                        <StyledTh>Deceased</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {districtData ? (
                        Object.keys(districtData).map((district) => {
                            const districtInfo = districtData[district]?.total || {};
                            return (
                                <tr key={district}>
                                    <StyledTd>{district}</StyledTd>
                                    <StyledTd>{districtInfo.confirmed || 'N/A'}</StyledTd>
                                    <StyledTd>{districtInfo.recovered || 'N/A'}</StyledTd>
                                    <StyledTd>{districtInfo.deceased || 'N/A'}</StyledTd>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <StyledTd colSpan="4">No data available for {stateName}</StyledTd>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </AppContainer>
    );
}

export default DistrictData;

// Styled components

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:auto;
  width: 100vw;
  background-color: #161625;
  overflow-x: hidden;
`;

const Heading=styled.div`
height:300px;
display: flex;
justify-content: center;
align-items: center;
color:white;
font-size:50px;
padding-bottom:20px;
`;

const StyledTable = styled.table`
width: 70%;

  border: 2px solid white;
  border-radius: 5px;
  margin: auto;
  background-color: #1e1e30;
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
    text-decoration: none;
  }

  &:nth-child(4) {
    color: red;
  }
`;