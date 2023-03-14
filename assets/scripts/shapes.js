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
const infor = document.querySelector('.info');


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
  if (shapesArr.length < 24) {
    const shape = new Shape(type, color);
    shapesArr.push(shape);
    let div = document.createElement("div");
    div.className = shapesArr.length;
    grid.append(div);
    div.style.backgroundColor = shape.color;
    div.style.borderRadius = shape.type;
  } else {
    infor.innerText = 'No more room!'
  }
}

function getInfo(shape) {
  let color = colorName(shapesArr[shape].color);
  let type = shapeName(shapesArr[shape].type);
  return `Unit ${shape}: ${color} ${type}`
}

function setColor(color) {
  if (color === 'blue') { return '#0f9' }
  if (color === 'green') { return '#9f0' }
  if (color === 'orange') { return '#f90' }
  if (color === 'pink') { return '#f09' }
  if (color === 'purple') { return '#90f' }
}

function colorName(color) {
  if (color === '#0f9') { return 'Blue' }
  if (color === '#9f0') { return 'Green' }
  if (color === '#f90') { return 'Orange' }
  if (color === '#f09') { return 'Pink' }
  if (color === '#90f') { return 'Purple' }
}

function shapeName(type) {
  if (type === '100%') { return 'Circle' }
  if (type === '25%') { return 'Square' }
}

create.addEventListener('click', () => {
  let color = colorSel.value;
  let type = typeSel.options[typeSel.selectedIndex].value;
  if (type === 'circle') {
    type = '100%';
    color = setColor(color);

  } else {
    type = '25%';
    color = setColor(color);
  }
  createShape(type, color);
  console.log(shapesArr);
});

grid.addEventListener('click', function (event) {
  let num = event.target.className;
  if (num <= 24) {
    infor.innerText = getInfo(num-1);
  }
});


/* 
  for (let i = 0; i < 23; i++)
  {
    createShape('99%', '#0f9');
  }
  createShape('1%', '#0f9');
*/



