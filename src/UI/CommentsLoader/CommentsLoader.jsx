import { ScaleLoader } from 'react-spinners';

const override = {
  position: 'absolute',
  left: '50%',
  top: '45%',
};

export const CommentsLoader = () => (
  <ScaleLoader color="#cc6633" cssOverride={override} />
);
