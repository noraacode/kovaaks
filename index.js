const circleElem = document.querySelector('.circle')

circleElem.addEventListener("mouseover",() => {
    const circle = randomPosition();
    circleElem.style.left = circle[0] + "px";
    circleElem.style.top = circle[1] + "px";
});

function randomPosition(){
    const viewport = [1904, 976];
    const xValue = Math.random() * viewport[0];
    const yValue = Math.random() * viewport[1];
    return [xValue, yValue];
}