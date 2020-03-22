let maxDepth = 0;
module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        
        for (let i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) maxDepth = this.calculateDepth(arr[i], depth + 1);
        }
        maxDepth = (maxDepth > depth) ? maxDepth : depth;
      
        let result = maxDepth;
        maxDepth = 0;
        return result;
        }




    // calculateDepth(arr,level = 1) {
        
    //     arr.forEach(elem => {
    //          if(Array.isArray(elem)) {
    //              let f = this.calculateDepth(elem, level);
    //              if(level < f) {
    //                 level ++;
    //              }
    //          } else {
    //              return 0;
    //          }
    //      })
    //     return level + 1;
    // }
};
// If(level <  this.calculateDepth(elem, level){
//     level = this.calculateDepth(elem, level);
// }

// if(!level) {
        //     level = 1;
        // }
        
        // let res = arr.map(elem => {
        //     if (Array.isArray(elem)) {
        //         return this.calculateDepth(elem);
        //     } else {
        //         return 0;
        //     }
        // }, this);

        // res = Math.max(...res) + 1;
        // return res;


// calculateDepth(arr) {
//     let depth = 0;
//     for (const item of arr) {
//       depth = Array.isArray(item)
//         ? Math.max(this.calculateDepth(item), depth)
//         : depth;
//     }
//     return ++depth;
//   }


