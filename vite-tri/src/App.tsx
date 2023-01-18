import * as React from 'react';
import { Test } from './test/test.component';

type Props = {};

function Index(props: Props) {
  return (
    <>
      <div>
        <span>react with webpack/vite</span>
        <Test />
      </div>
    </>
  );
}
export default Index;