// @ts-check
/* eslint-disable no-param-reassign */

import _ from 'lodash';

// BEGIN (write your solution here)

const startApp = (state) => {
  const list = document.querySelector('[data-container="lists"]');
  list.innerHTML = '<ul><li><b>General</b></li></ul>';
  state.lists.push({name: 'General'});
}

const makeA = (el) => {
  const a = document.createElement('a');
  a.setAttribute('href', `#${_.camelCase(el.name)}`);
  a.textContent = el.name;
  return a;
}

const getHash = () => {
  const url = new URL(window.location.href);
  return url.hash;
}

const replacePrev = (prev, e) => {
  if (prev !== null) {
      const replacePrevEl = document.createElement('a');
      replacePrevEl.setAttribute('href', `#${_.camelCase(prev.textContent)}`);
      replacePrevEl.textContent = prev.textContent;
      prev.replaceWith(replacePrevEl);
    }
    const replaceEl = document.createElement('b');
    replaceEl.textContent = e.target.textContent;
    e.target.replaceWith(replaceEl);
}

const addItem = (state, e, type, id) => {
  if (type === 'list') {
    const list = {
      name: e.target.elements.name.value,
    };
    state.lists.push(list);
  }
  if (type === 'task') {
    const task = {
      name: e.target.elements.name.value,
      id: id
    }
    state.tasks.push(task);
  }
}


const renderList = (state) => {
  const container = document.querySelector('[data-container="lists"]');
  let selected = container.querySelector('b');
  if (selected !== null) {
    selected = selected.textContent;
  }
  container.innerHTML = '';
  state.lists.map((list) => {
    let el = document.createElement('ul');
    const li = document.createElement('li');
    let a = null;
    if (list.name === selected) {
      a = document.createElement('b');
      a.textContent = list.name;
    } else {
      a = makeA(list)
    }
    li.append(a);
    el.append(li);
    if (container.innerHTML.includes('<ul>')) {
      el = li;
      container.querySelector('ul').append(el);
    } else {
      container.append(el);
    }
  })
};

const renderTask = (state, hash) => {
  const container = document.querySelector('[data-container="tasks"]');
  container.innerHTML = '';
  const currentTasks = state.tasks.filter(task => task.id === hash);
  currentTasks.map((list) => {
    let el = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = list.name;
    el.append(li);
    if (container.innerHTML.includes('<ul>')) {
      el = li;
      container.querySelector('ul').append(el);
    } else {
      container.append(el);
    }
    
  })
}

export default () => {
  const state = {
    lists: [],
    tasks: []
  };
  startApp(state);
  const listsContainer = document.querySelector('[data-container="lists"]');
  const tasksContainer = document.querySelector('[data-container="tasks"]');
  tasksContainer.innerHTML = '';
  const listsForm = document.querySelector('[data-container="new-list-form"]');
  const tasksForm = document.querySelector('[data-container="new-task-form"]');
  
  const listsFormHandler = (e) => {
    e.preventDefault();
    addItem(state, e, 'list');
    renderList(state);
    
    const input = listsForm.querySelector('[type="text"]');
    input.focus();
    input.value = '';
  };
  
  const tasksFormHandler = (e) => {
    e.preventDefault();
    const selected = `#${listsContainer.querySelector('b').textContent}`;
    const hash = getHash();
    addItem(state, e, 'task', selected);
    renderTask(state, selected);
    
    const input = tasksForm.querySelector('[type="text"]');
    input.focus();
    input.value = '';
  };

  const listsContainerHandler = (e) => {
    if(e.target.tagName === 'A') {
      const prev = listsContainer.querySelector('b');
      replacePrev(prev, e);
      const curr = listsContainer.querySelector('b');
      renderTask(state, `#${curr.textContent}`);
    }
  };
  
  listsForm.addEventListener('submit', listsFormHandler);
  tasksForm.addEventListener('submit', tasksFormHandler);
  listsContainer.addEventListener('click', listsContainerHandler);
};
// END
