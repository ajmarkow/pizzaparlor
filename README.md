# _AJ's Pizza Parlor_

_Pizza ordering application with front end that provides order feedback. Friday, August 28, 2020_

By **_AJ Markow_**

## Description

_A javascript based application intended for pizza ordering. The application takes the size of pizza requested, as well as toppings wanted. The topping and size information is then updated in a pizza object, so properties of the pizza can be displayed in the user interface after the order has been submitted._

## Setup/Installation Requirements

1. Clone /pizzaparlor folder to your device or hosting service.
2. Launch index.html in a web browser.
3. Use interface on index.html to place order

## Known Bugs

_No known bugs as of most recent commit on Friday, August 28, 2020_

## Support and contact details

_Find my contact info at https://www.ajm.codes_

## Technologies Used

_Bootstrap, CSS, Git, HTML, JavaScript, and jQuery._

### License

MIT License

Copyright (c) 2020 AJ Markow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.\_

Copyright (c) 2020 **_AJ Markow_**

### Specifications and Tests

Describe: A function that adds elements into toppings array dependendent on which type of pizza selected.
Test: Pizza type selected margherita will populate the list with Basil, Secret Garlic Sauce
Code: Pizza.prototype.setToppings()
Expect: Pizza.toppings = ['Basil','Secret Garlic Sauce']
Test passed

Describe: A function that sets cost of the pizza based on the size selected, and inserts this value into an array on the pizza object.
Test: If small is selected pizza cost will equal 18
Code: .setCost
Expect: piza summary array = ["$18"]
Test passed

Describe: A function that sets an id for the pizza, so multiple pizzas can eventually be ordered
Test: A new id is assigned
Code: pizza.assignId()
Expect: first pizza has an id of 0
Test Passed

Describe: Code that pulls the cost value from the summary array and passes this value into the cost property of the pizza
Test: if pizza is set as large, cost is 28 and this cost is set as the value of the cost property.
Code: populateCost
Expect: pizza.cost.toEqual(28)
