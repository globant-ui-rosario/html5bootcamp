window.onload = function() {
  document.getElementById('section-2').style.opacity='1';
};

function showAlert(){
  alert('Hello World');
}

function ajaxXMLHttpRequest(config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);
    xhr.send();
    
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        config.success(JSON.parse(xhr.responseText));
      }
    }, false);
}

function getXMLHttpRequest() {
  const config1 = {
    method: 'GET',
    url: 'http://api.icndb.com/jokes/random',
    success: (response) => document.getElementById('p-response').innerText = response.value.joke
  };

  ajaxXMLHttpRequest(config1);
}

function ajaxFetch(config) {
  return new Promise(function (resolve, reject) {
    fetch(config.url, { method: config.method })
      .then(function(response) {
        if (response.status !== 200) {
          reject(response.status);
          return;
        }
  
        response.json().then((data) => resolve(data));
      })
      .catch((error) => reject(error));
  });
}

function getFetch() {
  const config1 = {
    method: 'GET',
    url: 'http://api.icndb.com/jokes/random'
  };

  ajaxFetch(config1)
    .then((response) => document.getElementById('p-response').innerText = response.value.joke)
    .catch((error) => showError('Something went wrong: ' + error));
}

function showError(msg){
  document.getElementById("section-response").style.backgroundColor = 'red';
  document.getElementById('p-response').innerText = msg;

}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function createTextNode(text){
  return document.createTextNode(text);
}

function getRepositories() {
  let query = document.getElementById('repo-query').value;
  if(query == '') {
    query = 'JavaScript';
  }

  ajaxFetch({
      method: 'GET',
      url: 'https://api.github.com/search/repositories?q=' + query
    })
    .then(function(resp) {
      const repoList = document.getElementById('repo-list');
      repoList.innerHTML = '';

      let repos = resp.items;
      return repos.map(function(repo) {
        let li = createNode('li'),
            span = createNode('span');
        span.innerHTML = `${repo.full_name}`;
        append(li, span);
        append(repoList, li);
      });      
    })
    .catch(function(error) {
      console.log(error);
    });
}

let matrix = [
  [1,2,3], 
  [4,5,6], 
  [7,8,9]
];
function takesMatrix(matrix){
  const body = document.getElementById('body');
  let table = createNode('table');  

  matrix.map(function(row) {

    let tr = createNode('tr');

    row.map(function(col){
      let td = createNode('td'),
        text = createTextNode(col);


      append(td, text);
      append(tr, td);
    });
    append(table, tr);
  });
  append(body, table);
}


