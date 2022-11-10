import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import React, { LazyExoticComponent } from 'react';

export default (Comp: LazyExoticComponent<() => JSX.Element>) => {
  return (
    <React.Suspense
      fallback={
        <Container>
          <Typography
            component="div"
            style={{ height: '100vh', width: '100%' }}
          />
        </Container>
      }
    >
      <Comp />
    </React.Suspense>
  );
};
