/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  Object-oriented JavaScript
  Joshua Gable

  Shape Factory

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
'use strict'

let typeSel = document.getElementById('shape');
let colorSel = document.getElementById('color');
const grid = document.querySelector('.grid');
const create = document.querySelector('.create');


class Shape {
  constructor(type, color) {
    this._type = type;
    this._color = color;
  }

  get type() {
    return this._type
  }

  get color() {
    return this._color
  }
}

const shapesArr = [];

function createShape(type, color) {
  const shape = new Shape(type, color);
  shapesArr.push(shape);
  let div = document.createElement("div");
  div.className = 'col'
  grid.append(div);
  div.style.backgroundColor = shape.color;
  div.style.borderRadius = shape.type;
  console.log(shapesArr);
}

function setColor(color) {
  if (color === 'blue') { return '#0f9' }
  if (color === 'green') { return '#9f0' }
  if (color === 'orange') { return '#f90' }
  if (color === 'pink') { return '#f09' }
  if (color === 'purple') { return '#90f' }
}

create.addEventListener('click', () => {
  let color = colorSel.value;
  let type = typeSel.options[typeSel.selectedIndex].value;
  if(type === 'circle') {
    type = '100%';
    color = setColor(color);

  } else {
    type = '25%';
    color = setColor(color);
  }
  createShape(type, color);
});

/* 
  for (let i = 0; i < 23; i++)
  {
    createShape('99%', '#0f9');
  }
  createShape('1%', '#0f9');
*/



