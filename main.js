const events = require("events");
//이벤트 모듈 사용

const eventEmitter = new events.EventEmitter();
//eventEmitter 객체  생성

const connectionHandler = () => {
    console.log("Connection Successful");

    eventEmitter.emit("data_received");
};

eventEmitter.on("connection", connectionHandler);
//event와 eventHandler를 연동 eventName은 임의로 설정 가능
//on이라는 것은 연동하는 것이다. EventListener와 유사한 역활을 한다

eventEmitter.on("data_received", () => {
    console.log("Data Received");
});

eventEmitter.emit("connection");
//emit은 이벤트를 발생시키는 거임.
//connection이라는 이벤트를 발생시키고
//connection이벤트가 발생하면 connectioHandler를 실행함

console.log("Program has ended");
