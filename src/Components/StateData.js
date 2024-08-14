import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function StateData() {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      const filteredSuggestions = Object.keys(stateNameToCode).filter(stateName =>
        stateName.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchInput]);

  const handleSuggestionClick = (stateName) => {
    setSearchInput(stateName);
    setSuggestions([]);
    navigate(`/state/${stateName}`);
  };

  return (
    <Container>
      <Heading>COVID-19 Data by State</Heading>
      <SearchContainer>
        <SearchInput
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter state name"
        />
        {suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map((suggestion, index) => (
              <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchContainer>
    </Container>
  );
}

export default StateData;

// Styled components
const Container = styled.div`
  width: 100%;
  min-height: 300px; /* Ensure the container has a minimum height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 20px 20px; /* Add top padding to avoid overlap with the fixed navbar */
  background-color: #161625;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 300px) and (max-width: 850px) {
    padding: 120px 15px 15px; /* Adjust padding for mobile screens */
    min-height: 400px; /* Adjust height for mobile screens */
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: white;

  @media (min-width: 300px) and (max-width: 850px) {
    font-size: 1.5rem; /* Adjust font size for mobile screens */
    margin-bottom: 15px; /* Adjust margin for mobile screens */
  }
`;

const SearchContainer = styled.div`
  margin: 20px auto;
  text-align: center;
  width: 100%;

  @media (min-width: 300px) and (max-width: 850px) {
    margin: 15px auto; /* Adjust margin for mobile screens */
  }
`;

const SearchInput = styled.input.attrs({ type: 'text', autoComplete: 'off' })`
  width: 30%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #1e1e30;
  color: white;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (min-width: 300px) and (max-width: 850px) {
    width: 50%; /* Increase input width for mobile screens */
  }
`;

const SuggestionsList = styled.ul`
  width: 30%;
  margin: 10px auto 0;
  padding: 0;
  list-style-type: none;
  border: 1px solid grey;
  border-radius: 4px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #1e1e30;
  text-align: start;

  @media (min-width: 300px) and (max-width: 850px) {
    width: 50%; /* Increase suggestions list width for mobile screens */
  }
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: navy;
  }
`;
