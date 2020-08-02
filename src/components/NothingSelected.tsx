import React from 'react';
import { ReactComponent as StarIcon } from '../assets/icons/star.svg';
const NothingSelected = () => {
  return (
    <div className="nothing--main">
      <p>
        Select something
        <br />
        or creaty an entry!
      </p>

      <StarIcon></StarIcon>
    </div>
  );
};

export default NothingSelected;
