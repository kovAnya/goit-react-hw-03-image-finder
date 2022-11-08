import { Blocks } from 'react-loader-spinner';
import * as SC from './Loader.styled';

export const Loader = () => {
  return (
    <SC.Loader>
      <Blocks />
    </SC.Loader>
  );
};
