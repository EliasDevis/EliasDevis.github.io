
const steps = "/-\\|";
const FPS = 2
const frameInterval = 1000 / FPS;

let step = 0;
let lastTimestep = 0;

export default (pathName) => {
    window.requestAnimationFrame(animation);

    function animation(timestamp) {
        if (lastTimestep + frameInterval < timestamp) {
            document.title = `${steps[step++]} Elias | ${pathName}`;

            step %= steps.length;
            lastTimestep = timestamp;
        }

        window.requestAnimationFrame(animation);
    }
}