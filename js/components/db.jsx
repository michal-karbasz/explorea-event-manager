const DataBase = () => {
    window.indexedDB = windows.indexedDB || window.mozIndexedDB || window.webkitIndexedDb || window.msIndexedDB;

    if (!window.indexedDB) {
        alert(
            "Your browser doesn't support IndexedDB! Your events will only be visible until'l you close your browser window"
        );
    }

    let request = window.indexedDB.open('EventsDatabase', 1)
    let db;
    let tx;
    let store;
    let index;
    
    request.onupgradeneeded = e => { 
        db = e.target.result;
        store = db.createObjectStore ('EventsStore', {keyPath: 'title'});
        index = store.createIndex ('title', 'title', {unique: true});
    }
request.onerror = e => console.log('There was a database error:' + e.target.errorCode);
request.onsuccess = e => {
    db = e.target.result;
    tx = db.transaction('EventsStore', 'readwrite');
    store = tx.objectStore('EventsStore');
    index = store.index('title');
//generic error handler - take care of error handling in on db level (reached after bubbling)

db.onerror = e => console.log('There was a database error:' + e.target.errorCode);

store.put({title: 1,})

let event1 = store.get(1);
let eventindex = index.get('Martian languauge classes');

event1.onsuccess = () => console.log(event1.result);
event1.onsuccess = () => console.log(event1.result.title);

tx.oncomplete = () => db.close();
    }
}

export default DataBase;