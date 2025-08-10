import styled, { css } from "styled-components";
import React from 'react';
import {useSearchParams} from 'react-router-dom';
const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({filterField, options}) {

  const [searchParams, setSearchParams] = useSearchParams();
  //the problem was we need to find which one was active for that we are going to use get in params
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  if(searchParams.get('page')){
    searchParams.set('page', 1); // reset page to 1 when filter changes
  }
function handleClick(value) {
      searchParams.set(filterField, value);//setting up the values for the search
      setSearchParams(searchParams);// applying the values to the params..
  }

  return (
   <StyledFilter>
    {options.map(option =>

       <FilterButton key={option.value} active={option.value === currentFilter} disabled={option.value === currentFilter} onClick={() => handleClick(option.value)}>{option.label}</FilterButton>
    )}
    </StyledFilter>
  )
}

export default Filter
