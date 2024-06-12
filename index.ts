let myPromise1 = new Promise((resolve, reject) => {
    let success = true;
  
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  });
  
  myPromise1.then((message) => {
    console.log(message); 
  }).catch((error) => {
    console.error(error);
  });
  