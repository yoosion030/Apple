// const form = document.querySelector('form');
function printTodo() {
  const todoList = document.querySelector('.todoList'); 
  // value = input에 있는 내용
  const value = document.getElementById('input').value;
  // value를 텍스트노드로 만들기
  const newText = document.createTextNode(value);
  // 새로 생길 투두 리스트 만들기
  const newDiv = document.createElement('div');
  newDiv.className = 'list'; // 투두 클래스 이름을 list로 하기

  // 리스트 내용 담을 span태그 생성
  const content = document.createElement('span');

  content.appendChild(newText); // 내용을 span 태그에 담기
  newDiv.appendChild(content); // span태그를 div태그 안에 넣기

  todoList.appendChild(newDiv); // div태그를 todolist태그 안에 넣기

  // value가 없으면 버튼 생성 x
  if (value !== '') {
    const newBtn = document.createElement('input');
    newBtn.type = 'checkbox';
    newBtn.className = 'checkBox';
    newDiv.appendChild(newBtn);
  }
}

// const onSubmit = e => {
  //   e.preventDefault();
  // }
  
  // form.addEventListener('submit', e => onSubmit(e));
