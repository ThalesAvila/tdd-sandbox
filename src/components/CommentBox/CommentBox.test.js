import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox/CommentBox'

test('Should have a textarea and button', () => {
    const wrapped = mount(<CommentBox />);
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})