/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-check\n\n/* eslint-disable no-param-reassign */\n // BEGIN (write your solution here)\n\nvar startApp = function startApp(state) {\n  var list = document.querySelector('[data-container=\"lists\"]');\n  list.innerHTML = '<ul><li><b>General</b></li></ul>';\n  state.lists.push({\n    name: 'General'\n  });\n};\n\nvar makeA = function makeA(el) {\n  var a = document.createElement('a');\n  a.setAttribute('href', \"#\".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default().camelCase(el.name)));\n  a.textContent = el.name;\n  return a;\n};\n\nvar getHash = function getHash() {\n  var url = new URL(window.location.href);\n  return url.hash;\n};\n\nvar replacePrev = function replacePrev(prev, e) {\n  if (prev !== null) {\n    var replacePrevEl = document.createElement('a');\n    replacePrevEl.setAttribute('href', \"#\".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default().camelCase(prev.textContent)));\n    replacePrevEl.textContent = prev.textContent;\n    prev.replaceWith(replacePrevEl);\n  }\n\n  var replaceEl = document.createElement('b');\n  replaceEl.textContent = e.target.textContent;\n  e.target.replaceWith(replaceEl);\n};\n\nvar addItem = function addItem(state, e, type, id) {\n  if (type === 'list') {\n    var list = {\n      name: e.target.elements.name.value\n    };\n    state.lists.push(list);\n  }\n\n  if (type === 'task') {\n    var task = {\n      name: e.target.elements.name.value,\n      id: id\n    };\n    state.tasks.push(task);\n  }\n};\n\nvar renderList = function renderList(state) {\n  var container = document.querySelector('[data-container=\"lists\"]');\n  var selected = container.querySelector('b');\n\n  if (selected !== null) {\n    selected = selected.textContent;\n  }\n\n  container.innerHTML = '';\n  state.lists.map(function (list) {\n    var el = document.createElement('ul');\n    var li = document.createElement('li');\n    var a = null;\n\n    if (list.name === selected) {\n      a = document.createElement('b');\n      a.textContent = list.name;\n    } else {\n      a = makeA(list);\n    }\n\n    li.append(a);\n    el.append(li);\n\n    if (container.innerHTML.includes('<ul>')) {\n      el = li;\n      container.querySelector('ul').append(el);\n    } else {\n      container.append(el);\n    }\n  });\n};\n\nvar renderTask = function renderTask(state, hash) {\n  var container = document.querySelector('[data-container=\"tasks\"]');\n  container.innerHTML = '';\n  var currentTasks = state.tasks.filter(function (task) {\n    return task.id === hash;\n  });\n  currentTasks.map(function (list) {\n    var el = document.createElement('ul');\n    var li = document.createElement('li');\n    li.textContent = list.name;\n    el.append(li);\n\n    if (container.innerHTML.includes('<ul>')) {\n      el = li;\n      container.querySelector('ul').append(el);\n    } else {\n      container.append(el);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = {\n    lists: [],\n    tasks: []\n  };\n  startApp(state);\n  var listsContainer = document.querySelector('[data-container=\"lists\"]');\n  var tasksContainer = document.querySelector('[data-container=\"tasks\"]');\n  tasksContainer.innerHTML = '';\n  var listsForm = document.querySelector('[data-container=\"new-list-form\"]');\n  var tasksForm = document.querySelector('[data-container=\"new-task-form\"]');\n\n  var listsFormHandler = function listsFormHandler(e) {\n    e.preventDefault();\n    addItem(state, e, 'list');\n    renderList(state);\n    var input = listsForm.querySelector('[type=\"text\"]');\n    input.focus();\n    input.value = '';\n  };\n\n  var tasksFormHandler = function tasksFormHandler(e) {\n    e.preventDefault();\n    var selected = \"#\".concat(listsContainer.querySelector('b').textContent);\n    var hash = getHash();\n    addItem(state, e, 'task', selected);\n    renderTask(state, selected);\n    var input = tasksForm.querySelector('[type=\"text\"]');\n    input.focus();\n    input.value = '';\n  };\n\n  var listsContainerHandler = function listsContainerHandler(e) {\n    if (e.target.tagName === 'A') {\n      var prev = listsContainer.querySelector('b');\n      replacePrev(prev, e);\n      var curr = listsContainer.querySelector('b');\n      renderTask(state, \"#\".concat(curr.textContent));\n    }\n  };\n\n  listsForm.addEventListener('submit', listsFormHandler);\n  tasksForm.addEventListener('submit', tasksFormHandler);\n  listsContainer.addEventListener('click', listsContainerHandler);\n}); // END//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FwcGxpY2F0aW9uLmpzPzA2M2QiXSwibmFtZXMiOlsic3RhcnRBcHAiLCJzdGF0ZSIsImxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJsaXN0cyIsInB1c2giLCJuYW1lIiwibWFrZUEiLCJlbCIsImEiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiXyIsInRleHRDb250ZW50IiwiZ2V0SGFzaCIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhc2giLCJyZXBsYWNlUHJldiIsInByZXYiLCJlIiwicmVwbGFjZVByZXZFbCIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUVsIiwidGFyZ2V0IiwiYWRkSXRlbSIsInR5cGUiLCJpZCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0YXNrIiwidGFza3MiLCJyZW5kZXJMaXN0IiwiY29udGFpbmVyIiwic2VsZWN0ZWQiLCJtYXAiLCJsaSIsImFwcGVuZCIsImluY2x1ZGVzIiwicmVuZGVyVGFzayIsImN1cnJlbnRUYXNrcyIsImZpbHRlciIsImxpc3RzQ29udGFpbmVyIiwidGFza3NDb250YWluZXIiLCJsaXN0c0Zvcm0iLCJ0YXNrc0Zvcm0iLCJsaXN0c0Zvcm1IYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImZvY3VzIiwidGFza3NGb3JtSGFuZGxlciIsImxpc3RzQ29udGFpbmVySGFuZGxlciIsInRhZ05hbWUiLCJjdXJyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQWI7QUFDQUYsTUFBSSxDQUFDRyxTQUFMLEdBQWlCLGtDQUFqQjtBQUNBSixPQUFLLENB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QUFjLENBQUMzQyxhQUFmLENBQTZCLEdBQTdCLENBQWI7QUFDQXdDLGdCQUFVLENBQUMzQyxLQUFELGFBQVl5RCxJQUFJLENBQUMzQyxXQUFqQixFQUFWO0FBQ0Q7QUFDRixHQVBEOztBQVNBa0MsV0FBUyxDQUFDVSxnQkFBVixDQUEyQixRQUEzQixFQUFxQ1IsZ0JBQXJDO0FBQ0FELFdBQVMsQ0FBQ1MsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNKLGdCQUFyQztBQUNBUixnQkFBYyxDQUFDWSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5Q0gscUJBQXpDO0FBQ0QsQ0E5Q0QsRSxDQStDQSIsImZpbGUiOiIuL3NyYy9hcHBsaWNhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy8gQkVHSU4gKHdyaXRlIHlvdXIgc29sdXRpb24gaGVyZSlcblxuY29uc3Qgc3RhcnRBcHAgPSAoc3RhdGUpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cImxpc3RzXCJdJyk7XG4gIGxpc3QuaW5uZXJIVE1MID0gJzx1bD48bGk+PGI+R2VuZXJhbDwvYj48L2xpPjwvdWw+JztcbiAgc3RhdGUubGlzdHMucHVzaCh7bmFtZTogJ0dlbmVyYWwnfSk7XG59XG5cbmNvbnN0IG1ha2VBID0gKGVsKSA9PiB7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke18uY2FtZWxDYXNlKGVsLm5hbWUpfWApO1xuICBhLnRleHRDb250ZW50ID0gZWwubmFtZTtcbiAgcmV0dXJuIGE7XG59XG5cbmNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICByZXR1cm4gdXJsLmhhc2g7XG59XG5cbmNvbnN0IHJlcGxhY2VQcmV2ID0gKHByZXYsIGUpID0+IHtcbiAgaWYgKHByZXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlcGxhY2VQcmV2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICByZXBsYWNlUHJldkVsLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtfLmNhbWVsQ2FzZShwcmV2LnRleHRDb250ZW50KX1gKTtcbiAgICAgIHJlcGxhY2VQcmV2RWwudGV4dENvbnRlbnQgPSBwcmV2LnRleHRDb250ZW50O1xuICAgICAgcHJldi5yZXBsYWNlV2l0aChyZXBsYWNlUHJldkVsKTtcbiAgICB9XG4gICAgY29uc3QgcmVwbGFjZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpO1xuICAgIHJlcGxhY2VFbC50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgIGUudGFyZ2V0LnJlcGxhY2VXaXRoKHJlcGxhY2VFbCk7XG59XG5cbmNvbnN0IGFkZEl0ZW0gPSAoc3RhdGUsIGUsIHR5cGUsIGlkKSA9PiB7XG4gIGlmICh0eXBlID09PSAnbGlzdCcpIHtcbiAgICBjb25zdCBsaXN0ID0ge1xuICAgICAgbmFtZTogZS50YXJnZXQuZWxlbWVudHMubmFtZS52YWx1ZSxcbiAgICB9O1xuICAgIHN0YXRlLmxpc3RzLnB1c2gobGlzdCk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICd0YXNrJykge1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICBuYW1lOiBlLnRhcmdldC5lbGVtZW50cy5uYW1lLnZhbHVlLFxuICAgICAgaWQ6IGlkXG4gICAgfVxuICAgIHN0YXRlLnRhc2tzLnB1c2godGFzayk7XG4gIH1cbn1cblxuXG5jb25zdCByZW5kZXJMaXN0ID0gKHN0YXRlKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cImxpc3RzXCJdJyk7XG4gIGxldCBzZWxlY3RlZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdiJyk7XG4gIGlmIChzZWxlY3RlZCAhPT0gbnVsbCkge1xuICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XG4gIH1cbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBzdGF0ZS5saXN0cy5tYXAoKGxpc3QpID0+IHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYSA9IG51bGw7XG4gICAgaWYgKGxpc3QubmFtZSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XG4gICAgICBhLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gbWFrZUEobGlzdClcbiAgICB9XG4gICAgbGkuYXBwZW5kKGEpO1xuICAgIGVsLmFwcGVuZChsaSk7XG4gICAgaWYgKGNvbnRhaW5lci5pbm5lckhUTUwuaW5jbHVkZXMoJzx1bD4nKSkge1xuICAgICAgZWwgPSBsaTtcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoZWwpO1xuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IHJlbmRlclRhc2sgPSAoc3RhdGUsIGhhc2gpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29udGFpbmVyPVwidGFza3NcIl0nKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBjdXJyZW50VGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkID09PSBoYXNoKTtcbiAgY3VycmVudFRhc2tzLm1hcCgobGlzdCkgPT4ge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgIGVsLmFwcGVuZChsaSk7XG4gICAgaWYgKGNvbnRhaW5lci5pbm5lckhUTUwuaW5jbHVkZXMoJzx1bD4nKSkge1xuICAgICAgZWwgPSBsaTtcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpLmFwcGVuZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoZWwpO1xuICAgIH1cbiAgICBcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBsaXN0czogW10sXG4gICAgdGFza3M6IFtdXG4gIH07XG4gIHN0YXJ0QXBwKHN0YXRlKTtcbiAgY29uc3QgbGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb250YWluZXI9XCJsaXN0c1wiXScpO1xuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cInRhc2tzXCJdJyk7XG4gIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBsaXN0c0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb250YWluZXI9XCJuZXctbGlzdC1mb3JtXCJdJyk7XG4gIGNvbnN0IHRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cIm5ldy10YXNrLWZvcm1cIl0nKTtcbiAgXG4gIGNvbnN0IGxpc3RzRm9ybUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRJdGVtKHN0YXRlLCBlLCAnbGlzdCcpO1xuICAgIHJlbmRlckxpc3Qoc3RhdGUpO1xuICAgIFxuICAgIGNvbnN0IGlucHV0ID0gbGlzdHNGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwidGV4dFwiXScpO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfTtcbiAgXG4gIGNvbnN0IHRhc2tzRm9ybUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGAjJHtsaXN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdiJykudGV4dENvbnRlbnR9YDtcbiAgICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpO1xuICAgIGFkZEl0ZW0oc3RhdGUsIGUsICd0YXNrJywgc2VsZWN0ZWQpO1xuICAgIHJlbmRlclRhc2soc3RhdGUsIHNlbGVjdGVkKTtcbiAgICBcbiAgICBjb25zdCBpbnB1dCA9IHRhc2tzRm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInRleHRcIl0nKTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH07XG5cbiAgY29uc3QgbGlzdHNDb250YWluZXJIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZihlLnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGNvbnN0IHByZXYgPSBsaXN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdiJyk7XG4gICAgICByZXBsYWNlUHJldihwcmV2LCBlKTtcbiAgICAgIGNvbnN0IGN1cnIgPSBsaXN0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdiJyk7XG4gICAgICByZW5kZXJUYXNrKHN0YXRlLCBgIyR7Y3Vyci50ZXh0Q29udGVudH1gKTtcbiAgICB9XG4gIH07XG4gIFxuICBsaXN0c0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbGlzdHNGb3JtSGFuZGxlcik7XG4gIHRhc2tzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0YXNrc0Zvcm1IYW5kbGVyKTtcbiAgbGlzdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0c0NvbnRhaW5lckhhbmRsZXIpO1xufTtcbi8vIEVORFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application.js */ \"./src/application.js\");\n\n(0,_application_js__WEBPACK_IMPORTED_MODULE_0__.default)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiYXBwIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUFBLHdEQUFHIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tICcuL2FwcGxpY2F0aW9uLmpzJztcblxuYXBwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;