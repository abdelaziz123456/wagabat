import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PromocardPlaceholder = () => {
  return (
    <SkeletonPlaceholder>
      <>
        <SkeletonPlaceholder.Item width={166} height={166} marginBottom={8} />
        <SkeletonPlaceholder.Item width={156} height={15} />
        <SkeletonPlaceholder.Item
          width={120}
          height={11}
          marginTop={5}
          marginBottom={12}
        />
      </>
    </SkeletonPlaceholder>
  );
};

export default PromocardPlaceholder;
