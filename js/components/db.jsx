

const DataBase = () => {

    manageDB = () => {
        console.log('dziala')
    }

        //temporary DB section
    
       // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDb || window.msIndexedDB;
    
       if (!('indexedDB' in window)) {
           alert(
               "Your browser doesn't support IndexedDB! Your events will only be visible until'l you close your browser window" );
               return;
       }
    
       let request = window.indexedDB.open('EventsDatabase', 1)
       let db;
       let tx;
       let store;
       
       request.onupgradeneeded = e => { 
           db = e.target.result;
           store = db.createObjectStore('EventsStore', {keyPath: 'title'});
       }
       request.onerror = e => console.log('There was a database error:' + e.target.errorCode);
    
       request.onsuccess = e => {
           db = e.target.result;
           tx = db.transaction('EventsStore', 'readwrite');               
           store = tx.objectStore('EventsStore');
    
       //generic error handler - take care of error handling in on db level (reached after bubbling)
       
       db.onerror = e => console.log('There was a database error:' + e.target.errorCode);
       let dbEventList = this.state.eventList.slice();
       dbEventList.map((item) => store.put(item ));
       let storedEventList = store.getAll()
       storedEventList.onsuccess = () => this.setState({storedList: storedEventList.result},() => console.log(this.state.storedList)) ;
       
       tx.oncomplete = () => db.close();
       }
}

export default DataBase;