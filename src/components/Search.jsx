import React,{useState,useEffect,useRef} from 'react';
import useFetch from '../hooks/useFetch.js';
import {Typeahead} from 'react-bootstrap-typeahead';
import {ButtonGroup, ButtonToolbar, Col, Container} from 'react-bootstrap';
import Button from './Button.jsx';
import Row from 'react-bootstrap/Row';
import '../styles/Search.css';
function Search(){
 const ref = useRef(null);
const{data,error}=useFetch('https://jsonplaceholder.typicode.com/users');
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
export default Search
