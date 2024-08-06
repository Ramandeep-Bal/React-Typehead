import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react';
 import Search from './Search.jsx';
 //test Clear button rendered inside Search Component
test( 'Clear', () => {
render(<Search/>);
const buttonElement = screen.getByText('Clear');
expect(buttonElement).toBeInTheDocument();
})