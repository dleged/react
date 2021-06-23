'use strict';

describe('test createElement', () => {


  let React;

  beforeEach(() => {
    React = require('react');
  });

  it('should create an element', () => {
    let Div = React.createElement('h1', {className: 'text-1'}, <p>this is a p</p>);

    expect(Div).toEqual(<h1 className="text-1"><p>this is a p</p></h1>);
  });


});
