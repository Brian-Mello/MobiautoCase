import React from 'react';
import renderer from 'react-test-renderer';
import VeiculoCard from '.';

describe('testando integridade do VeiculoCard component', () => {
    it(' VeiculoCard snapshot', () => {
        const veiculoCard = renderer.create(<VeiculoCard/>).toJSON();
        expect(veiculoCard).toMatchSnapshot();
    });
}); 