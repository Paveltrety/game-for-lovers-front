import SelectComponent from 'react-select';
import { Option } from './Select.types';

interface ISelectProps<TValue> {
  options: Option<TValue>[];
  value: Option<TValue>;
  onChange: (newValue: Option<TValue> | null) => void;
}

export const Select =<TValue, > ({ options, value, onChange }: ISelectProps<TValue>) => {
  return <SelectComponent<Option<TValue>> options={options} value={value} onChange={onChange} isSearchable={false} />;
};
