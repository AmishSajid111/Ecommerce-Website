import React from 'react';
import Button from './../custom-button/custom-button.component';

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Load More
    </Button>
  );
};

export default LoadMore;