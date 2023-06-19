import { useDispatch } from "react-redux";
import { updateFilter } from "redux/filterSlice";

import { Label, Input } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Please enter a name"        
        onChange={ handleChange }
      />
    </Label>
  )
};