/*
useRef hook for storing information between renders of Typeahead component
*/import React,{useRef} from 'react';
import useFetch from '../hooks/useFetch.js';
import {Typeahead} from 'react-bootstrap-typeahead';
import { Container} from 'react-bootstrap';
import Button from './Button.jsx';
import '../styles/Search.css';
function Search(){
 const ref = useRef(null);
 //Calling the Custom Hook when there is change in state variable which triggers re-render
const{data}=useFetch('http://localhost:3031/users');
return(
    <Container className="Search" > 
    <Typeahead
    id="typehead"
    labelKey="name"
    placeholder="Search"
    options={data}
    minLength={1}
    ref={ref}
    ></Typeahead>
        <Button  onClick={() => ref.current?.clear()}>Clear</Button>
        <Button onClick={() => ref.current?.focus()}>Focus</Button>
        <Button
          onClick={() => {
            ref.current?.focus();
            setTimeout(() => ref.current?.blur(), 1000);
          }}>
          Focus, then blur after 1 second
        </Button>
        </Container>
)
}   
//Search component renders Button Component mamy times
export default Search
