import * as SC from './Button.styles';

export const Button = ({ onClick }) => {
  return (
    <SC.Button type="button" onClick={onClick}>
      Load more
    </SC.Button>
  );
};
