import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

   it( 'should add two numbers together', () => {
  
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const buttonAdd = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');

    button4.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');

    const runningTotal = container.find('#running-total');

    expect(runningTotal.text()).toEqual("5")
   });

   it('should remove 3 from 7', () => {
     const button3 = container.find('#number3');
     const button7 =container.find('#number7');
     const buttonSub =container.find('#operator-subtract');
     const buttonEquals =container.find('#operator-equals');

     button7.simulate('click');
     buttonSub.simulate('click');
     button3.simulate('click');
     buttonEquals.simulate('click');

     const runningTotal = container.find('#running-total');

     expect(runningTotal.text()).toEqual('4');
   })

   it('should multiply the numbers' , () => {
    const button3 = container.find('#number3');
    const multiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const equals = container.find('#operator-equals');
    const total = container.find('#running-total');

    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');

    expect(total.text()).toEqual('15');
   })

   it (' should divide the numbers', () => { 
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const divide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const equals = container.find('#operator-equals');
    const total = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    
    expect(total.text()).toEqual('3');

   })

   it('should take multiple clicks as one number', () => {

    const button2 = container.find('#number2');
    const button3 =container.find('#number3');

    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button3.simulate('click');

    expect(runningTotal.text()).toEqual('23');

   })


   it('should chain operators together', () => {

    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const divide = container.find('#operator-divide');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    const total = container.find('#running-total');

    button2.simulate('click');
    divide.simulate('click');
    button1.simulate('click');
    multiply.simulate('click');
    button2.simulate('click');
    equals.simulate('click');
   

    expect(total.text()).toEqual('4')

   })

   it (' should store last equation after clear', () => {

      container.find('#number8').simulate('click');
      container.find('#operator-divide').simulate('click');
      container.find('#number2').simulate('click');
      container.find('#operator-subtract').simulate('click');
      container.find('#number2').simulate('click');
      container.find('#clear').simulate('click');
      container.find('#operator-equals').simulate('click');
      const total = container.find('#running-total');

      expect(total.text()).toEqual("4");


   })
   
})

