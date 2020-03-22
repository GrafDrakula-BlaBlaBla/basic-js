module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let secTrSpeed = turnsSpeed / 3600;

    let turns = 2 ** disksNumber - 1;
    
    let seconds = turns / secTrSpeed;

    return {turns, seconds};
}