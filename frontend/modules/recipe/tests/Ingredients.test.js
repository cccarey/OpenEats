import React from 'react';
import Ingredients from '../components/Ingredients';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const data = [{"id":1,"title":"black pepper","quantity":1,"measurement":"dash","recipe":1},{"id":2,"title":"chili powder","quantity":4,"measurement":"tablespoons","recipe":1},{"id":3,"title":"cumin","quantity":1,"measurement":"tablespoon","recipe":1},{"id":4,"title":"dark kidney beans","quantity":1,"measurement":"can","recipe":1},{"id":5,"title":"diced tomatos","quantity":2,"measurement":"cans","recipe":1},{"id":6,"title":"green bell pepper","quantity":1,"measurement":"whole","recipe":1},{"id":7,"title":"ground pork","quantity":1,"measurement":"pound","recipe":1},{"id":8,"title":"ground sirloin","quantity":1,"measurement":"pound","recipe":1},{"id":9,"title":"kosher salt","quantity":1,"measurement":"dash","recipe":1},{"id":10,"title":"light kidney beans","quantity":1,"measurement":"can","recipe":1},{"id":11,"title":"serrano pepper ","quantity":1,"measurement":"whole","recipe":1},{"id":12,"title":"white onion","quantity":1,"measurement":"whole","recipe":1}];
  const component = renderer.create(
    <Ingredients data={ data }/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  //
  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});