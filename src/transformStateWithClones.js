'use strict';

const state1 = {
  foo: 'bar',
  bar: 'foo',
};

const result = transformStateWithClones(state1, [
  {
    type: 'addProperties',
    extraData: { name: 'Jim', hello: 'world' },
  },
  {
    type: 'removeProperties',
    keysToRemove: ['bar', 'hello'],
  },
  {
    type: 'addProperties',
    extraData: { another: 'one' },
  },
]);


/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const baseState = {...state}
  let resultArr = []
for (const action of actions) {
  if(action.type ==='addProperties')
  {
    let currentState = {...baseState, ...action.extraData };
    resultArr.push(currentState);
  }
  if (action.type ==='removeProperties')
  {
    for (const key of action.keysToRemove) {
      delete baseState[key];
      resultArr.push(baseState);
    }
   
  }
  if (action.type ==='clear')
    {
    baseState = {}
    resultArr.push(baseState)
    }
}
}

console.log(result)
module.exports = transformStateWithClones;
