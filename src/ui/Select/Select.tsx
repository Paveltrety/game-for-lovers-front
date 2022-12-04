import { FC } from 'react';
import SelectComponent from 'react-select';
import { Option } from './Select.types';

type SelectProps = {
    options: Option[];
    value: Option;
    onChange: (newValue: Option | null) => void;
};

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
    return (
        <SelectComponent<Option>
            options={options}
            value={value}
            onChange={onChange}
            isSearchable={false}
        />
    );
};
