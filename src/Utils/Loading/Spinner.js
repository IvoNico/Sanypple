import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1} margin={2}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={210} height={300}  />
    </Stack>
  );
}
