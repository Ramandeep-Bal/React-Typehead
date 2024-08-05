import React,{useState,useEffect} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
function Search(){
const [selectedOption, setSelectedOption] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{console.log(data)
        setSelectedOption(data);
})
    .catch(err=>console.log(err))
},[])
return(
    <>
    <Typeahead 
    id="typehead"
    labelKey="name"
    placeholder="Search"
    options={selectedOption}
    minLength={1}
    ></Typeahead>
    </>
)
}   
export default Search
