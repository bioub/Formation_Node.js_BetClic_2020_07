class Contact {
  constructor() {
    this.firstName = 'Romain';
  }
  hello() {
    console.log('Hello ' + this.firstName);
  }
  helloAsync() {
    setTimeout(() => this.hello(), 1000);
  }
}


const romain = new Contact();
romain.helloAsync();
