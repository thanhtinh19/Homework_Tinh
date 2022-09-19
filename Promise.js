
//Queue
//  class Queue {
//     constructor(delay = 1000) {
//         this.delay = delay;
//         this.callbackQueue = [];
//     }

//     add(callback) {
//         if (this.callbackQueue.length === 0) {
//             this.callbackQueue.push(callback);
//             this.runcallback();
//         } else {
//             this.callbackQueue.push(callback);
//         }
//     }

//     runcallback() {
//         const callback = this.callbackQueue[0];
//         setTimeout(() => {
//             this.callbackQueue.shift();
//             if (this.callbackQueue.length > 0) {
//                 this.runcallback();
//             }
//         }, this.delay);

//         callback();
//     }
// }

// const cb1 = () => console.log('1');
// const cb2 = () => console.log('2');
// const cb3 = () => console.log('3');
// const cb4 = () => console.log('4');

// const queue1 = new Queue(1500);
// queue1.add(cb1);
// setTimeout(() => queue1.add(cb2), 500);
// setTimeout(() => queue1.add(cb3), 6000);
// setTimeout(() => queue1.add(cb4), 6500);





//Promise
const array = [
    "swift",
    "rust",
    "javascript",
    "react",
    "rx",
    "ruby",
    "rails",
    "php",
    "objective-c",
    "html",
    "css",
    "pug"
];

function run() {
    const keywords = array.splice(0, 5);
    if (keywords.length <= 0) {
        return;
    }
    const promises = keywords.map((item) =>
        fetch("https://ech-o.herokuapp.com/fetch?q=" + item)
    );
    const rejected = [];
    Promise.allSettled(promises)
        .then((responses) => {
            const fulfilled = [];
            responses.forEach((res, index) => {
                if (res.status === "fulfilled") {
                    fulfilled.push(res.value.json());
                } else {
                    rejected.push(keywords[index]);
                }
            });
            return Promise.all(fulfilled);
        })
        .then((jsons) => {
            console.log("JSON", jsons);
        })
        .then(() => run());
}

//run();
class Queue {
    constructor(delay = 1000) {x
        this.delay = delay;
        this.callbackQueue = [];
    }

    add(callback) {
        if (this.callbackQueue.length === 0) {
            this.callbackQueue.push(callback);
            this.runcallback();
        } else {
            this.callbackQueue.push(callback);
        }
    }

    runcallback() {
        const callback = this.callbackQueue[0];
        setTimeout(() => {
            this.callbackQueue.shift();
            if (this.callbackQueue.length > 0) {
                this.runcallback();
            }
        }, this.delay);

        callback();
    }
}

const log = (...args) => {
    console.log(new Date().toISOString(), ...args);
};

const queue = new Queue();
// queue.add(() => log(1));
// queue.add(() => log(2));
// queue.add(() => log(3));

queue.add(() => log(1)); // 0
queue.add(() => log(2)); // 1
setTimeout(() => {
    queue.add(() => log(3));
}, 500); // 2
setTimeout(() => {
    queue.add(() => log(4));
}, 5000); // 4
setTimeout(() => {
    queue.add(() => log(5));
}, 5500); // 5
setTimeout(() => {
    queue.add(() => log(6));
}, 6000); // 6


