class Contact {
    firstName = '';
    constructor() {
      this.firstName = 'Romain';
    }
    helloAsync() {
      setTimeout(() => {
        console.log('Hello ' + this.firstName);
      }, 1000);
    }
  }
  
  
  const romain = new Contact();
  romain.helloAsync();
  