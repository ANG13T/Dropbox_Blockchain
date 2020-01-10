const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html')
})


ipfs.add('hello world!').then(console.log).catch(console.log);
 
// result null 'QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j'
 
ipfs.cat('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j', (err, result) => {
  console.log(err, result);
});
 
// result null 'hello world!'
 
// ipfs.addJSON({ somevalue: 2, name: 'Nick' }, (err, result) => {
//   console.log(err, result);
// });
 
// result null 'QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j'
 
// ipfs.catJSON('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j').then(console.log).catch(console.log);
 

app.listen(2222, (err) => {
  if(err) {
    throw err; 
  } else {
    console.log("Server is running on 2222")
  }
})