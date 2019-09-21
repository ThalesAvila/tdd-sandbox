import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox/CommentBox'

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
})

afterEach(()=> {
  wrapped.unmount()
})

test('Should have a textarea and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

test('', () => {

})
