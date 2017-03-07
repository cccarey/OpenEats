import React from 'react';
import Directions from '../components/Directions';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  let data = [
    {
      "id":1,
      "step":1,
      "title":"Brown the ground pork and ground sirlion in a medium pan. Add a teaspoon of sereano pepper while browning the meat. Season with kosher salt and pepper.",
      "recipe":1
    },
    {
      "id":2,
      "step":2,
      "title":"Chop the onion, bell pepper and one Serrano pepper and place them in a large pot.",
      "recipe":1
    }
  ];
  const component = renderer.create(
    <Directions data={ data }/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  data = [{"id":1,"step":1,"title":"Brown the ground pork and ground sirlion in a medium pan. Add a teaspoon of sereano pepper while browning the meat. Season with kosher salt and pepper.","recipe":1},{"id":2,"step":2,"title":"Chop the onion, bell pepper and one Serrano pepper and place them in a large pot.","recipe":1},{"id":3,"step":3,"title":"Open up and drain both cans of kidney beans and add them to the large pot.","recipe":1},{"id":4,"step":4,"title":"Open up both cans of stewed chili style tomatoes and add them to the pot.","recipe":1},{"id":5,"step":5,"title":"Drain the grease away from the browned meat and add the meat to the pot.","recipe":1},{"id":6,"step":6,"title":"Pour in the tomato juice over the meat mixture.","recipe":1},{"id":7,"step":7,"title":"Add kosher salt, black pepper, two table spoons of chili powder, and two teaspoons of ground cumin. Stir well.","recipe":1}];

  // manually trigger the callback
  tree.props.data = data;
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});