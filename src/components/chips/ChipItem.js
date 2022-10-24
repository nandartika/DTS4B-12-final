import { Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../reducers/categorySlice";

const ChipItem = (props) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.category.category);
  const [key, label] = props.label;

  const handleClick = () => {
    dispatch(categoryActions.setCategory(key))
  };

  return (
    <Chip
      label={label}
      variant={activeCategory === key ? "filled" : "outlined"}
      color="primary"
      onClick={handleClick}
    />
  );
};

export default ChipItem;
