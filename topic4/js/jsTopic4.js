function saveTextLG(){
  let text = document.getElementById('text-area-lg').value;
  localStorage ["key1"] = text;
}

function deleteTextLG(){
  localStorage.clear("key1");
  document.getElementById('text-area-lg').value = "";
  
}

window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.OIndexedDB || window.msIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.OIDBTransaction || window.msIDBTransaction,
    dbVersion = 1;

let db;
let request = indexedDB.open("elements");

request.onupgradeneeded = function() {
  db = request.result;
  let store = db.createObjectStore("texts", {keyPath : "key"});
};

request.onsuccess = function() {
  db = request.result;
};

function saveTextIDB(){
  let textArea = document.getElementById('text-area-idb').value;
  
  let objectStore = db.transaction("texts", "readwrite")
                      .objectStore("texts");
  objectStore.put({
    "key":'text-area-idb',
    "value":textArea
  });
}

function deleteTextIDB(){
  db.transaction("texts", "readwrite")
    .objectStore("texts")
    .delete('text-area-idb');
  document.getElementById('text-area-idb').value = "";
  }

  function dropHandler(ev) {
    console.log('File dropped');
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    } 
    
    removeDragData(ev)
  }
  function dragOverHandler(ev) {
    console.log('File in drop zone'); 
    ev.preventDefault();
  }

  function removeDragData(ev) {
    console.log('Removing drag data')
  
    if (ev.dataTransfer.items) {
      ev.dataTransfer.items.clear();
    } else {
      ev.dataTransfer.clearData();
    }
  }




     
  



    



