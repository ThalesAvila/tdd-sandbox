import React from 'react';
import { mount } from 'enzyme';
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

test('has a textarea that users can type in', () => {
  const expectedValue = 'New Comment!'
  wrapped.find('textarea').simulate('change', {
    target: {
      value: expectedValue
    }
  })
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual(expectedValue);
})

test('when form is submmited, text area gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: {
      value: 'New Comment!'
    }
  })
  wrapped.update()
  wrapped.find('form').simulate('submit')
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})
