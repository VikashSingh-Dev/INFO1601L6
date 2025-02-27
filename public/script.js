let bob = {
    name: 'Bob',
    balance: 10
  }
  
  function add10(a){
    a.balance+= 10; // a is a pointer/reference to myObj
  }
  
  console.log(bob.balance);//10
  add10(bob);
  console.log(bob.balance);//20

  let myobj = {name: 'John', age: 31, city: 'New York'};
  let obj2 = myobj;

  //obj2 and myobj are the same variable
  
  obj2.name = "Shelly";
  
  console.log(myobj.name);//Shelly
  
  //if you need to create a new object and copy its values use Object.assign
  
  let obj3 = {};
  Object.assign(obj3, myobj);
  
  obj3.name = 'Smith';
  
  console.log(myobj.name, obj3.name);//Shelly, Smith


  // task 5
  let obj2 = myobj;

  //obj2 and myobj are the same variable
  
  obj2.name = "Shelly";
  
  console.log(myobj.name);//Shelly
  
  //if you need to create a new object and copy its values use Object.assign
  
  let obj3 = {};
  Object.assign(obj3, myobj);
  
  obj3.name = 'Smith';
  
  console.log(myobj.name, obj3.name);//Shelly, Smith