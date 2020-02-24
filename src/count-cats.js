module.exports = function countCats(array) {

  const cat = `^^`;
  let str = array.reduce((acc,val) => acc.concat(val),[]);
  let count = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === cat) {
      count++;
    }
  }

  return count;
}
