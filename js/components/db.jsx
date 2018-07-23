 

 // INDEXED DB START
        //indexedDB - open transaction to an item;

const DataBase = () => {

        const loadDB = () => {
        
            let request = window.indexedDB.open('EventsDatabase', 1);
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

            //create a copy o state.eventList, put each item into store then transfer stored data into state.storedList

            const dbEventList = this.state.eventList.slice();
            dbEventList.map((item) => store.put(item ));
            const storedEventList = store.getAll();
            storedEventList.onsuccess = () => this.setState({storedList: storedEventList.result}) ;
            
            tx.oncomplete = () => db.close();
            }
        }

        //indexedDB - open transaction to remove item, function called in deleteEvent, with event title passed as parameter (IndexedDB store keyPath is also based on title;

        const removeFromDB = (recordToDelete) => {
        
            let request = window.indexedDB.open('EventsDatabase', 1);
            let db;
            let tx;
            let store;
            
            request.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            request.onsuccess = e => {
                db = e.target.result;
                tx = db.transaction('EventsStore', 'readwrite');               
                store = tx.objectStore('EventsStore');

            //generic error handler - take care of error handling in on db level (reached after bubbling)
            
            db.onerror = e => console.log('There was a database error:' + e.target.errorCode);

            //delete record and refresh state

            store.delete(recordToDelete)
            const storedEventList = store.getAll();
            storedEventList.onsuccess = () => this.setState({storedList: storedEventList.result},() => console.log(this.state.storedList)) ;
            
            tx.oncomplete = () => db.close();
            }
        }
    }

export default DataBase;


    // INDEXED DB END