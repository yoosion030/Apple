const form = document.querySelector('form');
function printTodo() {
  const value = document.getElementById('input').value;
  const newDiv = document.createElement('div');
  newDiv.className = 'list';
  
  const newP = document.createElement('span');
  const newText = document.createTextNode(value);
  
  newP.appendChild(newText);
  newDiv.appendChild(newP);

  document.body.appendChild(newDiv);
  if(value !== '')
  {const newBtn = document.createElement('button');
  newBtn.className = 'checkBox';
  newDiv.appendChild(newBtn);
  }
} 

const onSubmit = e => {
  e.preventDefault();
  printTodo();
}

form.addEventListener('submit', e => onSubmit(e));
