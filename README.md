new Promise
(resolve => resolve({success:true})) . then(value => { console. log('second block:', value); 
if (value. success) { //skip 
the rest of this chain
and return the value to caller 
return value; } //do something else and continue return somethingElse()
