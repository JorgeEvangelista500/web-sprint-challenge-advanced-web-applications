import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react'

const testArticle = {
    id: '1234',
    author: '',
    headline: "headline", 
    createdOn: '2022-08-09T18:02:38-04:00',
    summary: "this is the summary", 
    body: "This is the body"  
}


test('renders component without errors', ()=> {
    render (<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle}/>)

    const press = screen.queryByText(/Associated Press/i)

    expect(press).toBeInTheDocument();


});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete =jest.fn()
    render(<Article article={testArticle} handleDelete={handleDelete}/>)

    const deleteButton = screen.getByTestId('deleteButton')
    userEvent.click(deleteButton);

    expect(handleDelete).toBeCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.