/* eslint-disable no-debugger */
'use strict';

describe('useState runtime test', () => {
  let React, useState, ReactDOM;

  beforeEach(() => {
    React = require('react');
    useState = React.useState;
    ReactDOM = require('react-dom');
  });

  it('should useState', () => {
    const container = document.createElement('div');
    container.attribute('id', 'myDIV');
    function Element() {
      let [count, setCount] = useState(0);
      let ref = React.useRef(1);
      // let [name, setName] = useState('yimu');


      if (count < 2) {
        ref.current = count;
        debugger;
        setCount(++count);
      }

      // React.useEffect(() => {
        // debugger;
        // console.log(111);
        // setCount(++count);
        // console.log(count);
      // });


      return <div>{count}</div>;
    }

    ReactDOM.render(<Element id="这是个弟弟🧍‍♂️" />, container);



  });

});
