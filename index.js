class List {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
      console.log(`${item} added to the list.`);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`${item} removed from the list.`);
      } else {
        console.log(`${item} not found in the list.`);
      }
    }
  
    displayList() {
      console.log('List Items:');
      if (this.items.length === 0) {
        console.log('The list is empty.');
      } else {
        this.items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
    }
  }
  
  // Example usage
  const myList = new List();
  
  myList.addItem('Task 1');
  myList.addItem('Task 2');
  myList.addItem('Task 3');
  
  myList.displayList();
  
  myList.removeItem('Task 2');
  
  myList.displayList();
  