
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "../cabins/CabinRow"
import { useCabins } from "./useCabins";
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';




function CabinTable() {
const {isLoading, cabins} = useCabins();
const [searchParams] = useSearchParams();

if(isLoading) {
   return <Spinner />
}

if(!cabins.length) return <Empty resourceName="cabins" />;

const filterValue = searchParams.get("discount") || 'all';

//why all was set bcoz by default when the pages changes it goes to null so we put as all.

let filteredCabins;
if(filterValue === "all") filteredCabins = cabins;
if(filterValue === 'no-discount') filteredCabins = cabins.filter(cabin=>cabin.discount === 0);
if(filterValue === 'with-discount') filteredCabins = cabins.filter(cabin=>cabin.discount > 0);

// 2) SORT

const sortBy = searchParams.get('sortBy') || "startDate-asc";
console.log(sortBy);
const [field, direction]= sortBy.split('-');
const modifier = direction === 'asc' ? 1 : -1;
const sortedCabins = filteredCabins.sort((a, b) => (a[field] -b[field])  * modifier);


  return (
    <Menus>
   <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
     <Table.Header> 
      <div></div>
<div>Cabin</div>
<div>Capacity</div>
<div>Price</div>
<div>Discount</div>
<div></div>
     </Table.Header>
     <Table.Body data={sortedCabins} render={(cabin) => (<CabinRow cabin={cabin} key={cabin.id}/>)} />
   </Table>
</Menus>
  )
  
}

export default CabinTable;
