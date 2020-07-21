import React from 'react';
import renderer from 'react-test-renderer';
import SelectUI from '.';

describe('testando integridade do SelectUI component', () => {
    it(' SelectUI snapshot', () => {
        const SelectUi = renderer.create(<SelectUI/>).toJSON();
        expect(SelectUi).toMatchSnapshot();
    });
}); 