/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Card from '../src/components/Card'
import {Character} from '../../pages/CharacterList';
import {render} from '@testing-library/react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { TestScheduler } from 'jest';
import { expect } from '@jest/globals';

test('Testar o card',()=>{

  character={
    id:'1',
    name:'Rick',
    image:'url',
    species:'Human',
    origin:{
      name:'Eart (C-137)',
      url:'url'
    }
  }
  const { getByText} = render (<Card item={character} />);
  const nameElement = getByText(/Rick/i);
  expect(nameElement).toBeInTheDocument();
})