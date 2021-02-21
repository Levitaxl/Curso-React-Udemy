import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';


describe('Pruebas en el <GifGrid />', () => {

    const title= 'Un titulo';
    const url = 'https://lcalhost/algo.jpg';

    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow( <GifGrid title={title} url={url} />);

        expect( wrapper ).toMatchSnapshot();
    });
    

})