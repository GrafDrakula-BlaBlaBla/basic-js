module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let i = [];
  members.forEach((elem) => {
debugger
    if(typeof elem === `string`){
      i.push(elem.match(/\b\w/i));
    }
  })

  let n = i.sort().map(el => el[0].toUpperCase()).join('');

  return n;
};

// const members = [
//   '   William Alston ',
//   ' Paul Benacerraf',
//   '  Ross Cameron',
//   '       Gilles Deleuze',
//   '  Arda Denkel ',
//   '  Michael Devitt',
//   '  Kit Fine',
//   ' Nelson Goodman',
//   'David Kolb',
//   '   Saul Kripke',
//   '  Trenton Merricks',
//   '  Jay Rosenberg',
// ];

// createDreamTeam(members);