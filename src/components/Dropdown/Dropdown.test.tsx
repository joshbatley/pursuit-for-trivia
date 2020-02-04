import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from './Dropdown';

let options = [{ id: 1, name: 'option 1' }, { id: 2, name: 'option 2' }];
let onChange = jest.fn((v) => v);

describe('Dropdown', () => {
  test('renders and allows selection of element', () => {
    let { getByText } = render(<Component options={options} placeholder="testing" />);
    fireEvent.click(getByText('testing'));
    expect(getByText('option 1')).toHaveValue('1');
    expect(getByText('option 2')).toHaveValue('2');
  });
  test('onchange retuned the new selected value', () => {
    let { getByTestId, getByText } = render(<Component options={options} placeholder="testing" onChange={onChange} />);
    expect(getByText('testing')).toBeInTheDocument();
    fireEvent.change(getByTestId('dropdown'), { target: { value: 2 } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('2');
  });
});
