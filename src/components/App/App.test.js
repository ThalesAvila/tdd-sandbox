import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox/CommentBox';
import CommentList from 'components/CommentList/CommentList';

let wrapped; 

beforeEach(() => {
    wrapped = shallow(<App />);
})

test('Should shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

test('Should shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})