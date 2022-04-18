// 1.
// what is a callback funtion in javascript?
// call sometime else in your programe or after certain amount of time

setTimeout(function settimer() {
    console.log("timer");
}, 3000);

function x(y) {
    console.log('x');
    y();
}
x(function y() {
    console.log('y');
});


// 2.
// javascript is a synchronous and single - threaded langusage

// 3.
// blocking the main thread

// 4.
// power of callback?

// 5.
// deep about event Listeners

// 6.
// closures demo with event listeners

// 7.
// scope demo with event listerner

// 8.
// garbage collection & removeEventListener
function attachedEventListener() {
    let count = 0;
    document.getElementById("clickMe").addEventListener('click', function xyz() {
        console.log('Button Clicked', count++);
    });
}
attachedEventListener();