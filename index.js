const distanceFromHqInBlocks = (from, base=42) => from > base ? from - base : base - from
const distanceFromHqInFeet = block => {
    let distance = distanceFromHqInBlocks(block);
    return (distance * 264);
}
const distanceTravelledInFeet = (spot1, spot2) => {
    let feet = Math.abs(spot1 - spot2)
    return (feet * 264)
}
const calculatesFarePrice = (spot1, spot2) => {
let fare = distanceTravelledInFeet(spot1, spot2);
if (fare <= 400) {
    return 0;
} else if (fare <= 2000) {
    return (fare - 400) * 0.02;
} else if (fare <= 2500) {
    return 25;
} else {
    return 'cannot travel that far';
}
}