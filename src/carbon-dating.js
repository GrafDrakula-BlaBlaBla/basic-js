const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== `string`){
        return false;
    }

    let sampleActivityN = parseFloat(sampleActivity);

    if(isNaN(sampleActivityN)) {
        return false;
    };

    if(sampleActivityN > 15) { return false; };
    if(sampleActivityN <= 0 ){ return false; };
   

    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY/sampleActivityN)/k;
    return Math.ceil(t);
};