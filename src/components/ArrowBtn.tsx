import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { DownArrow } from '../icons';
import { Default } from '../utils';

interface IArrowBtn {
  details: string | ReactNode;
  selectedDetails: string | ReactNode;
  theme: string;
  setSelectedDetails: Dispatch<SetStateAction<string | ReactNode>>;
}

export const ArrowBtn = ({
  details,
  selectedDetails,
  theme,
  setSelectedDetails
}: IArrowBtn) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__down-arrow ${
        Default.CSS_NAMESPACE
      }__down-arrow-theme--${theme} ${
        details === selectedDetails
          ? `${Default.CSS_NAMESPACE}__down-arrow-transform--upper`
          : ''
      }`}
      onClick={() =>
        setSelectedDetails(selectedDetails === details ? '' : details)
      }
    >
      <DownArrow theme={theme} />
    </div>
  );
};
