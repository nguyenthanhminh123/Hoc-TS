// Number enum
enum Status3 {
    PENDING, // 0
    IN_PROGRESS, // 1
    DONE, // 2
    CANCELLED, // 3
    }
    enum Status2 {
    PENDING = 3, // 3
    IN_PROGRESS, // 4
    DONE, // 5
    CANCELLED, // 6
    }

enum Status1 {
    PENDING = 3,
    IN_PROGRESS = 5,
    DONE = 8,
    CANCELLED = 10,
    }
    enum Status {
        PENDING, // 0
        IN_PROGRESS, // 1
        DONE, // 2
        CANCELLED, // 3
    }
// can assign any number to your enum variable
    const stats1: Status = Status.PENDING;
    const stats2: Status = 1;
    const stats3: Status = -1;
// number enum --> support reverse mapping
    console.log(Status[0]); // 'PENDING'
    console.log(Status['DONE']); // 2
    enum MediaTypes {
        JSON = "application/json",
        XML = "application/xml",
    }
        fetch("https://example.com/api/endpoint", {
        headers: {
        Accept: MediaTypes.JSON,
    },
}).then(response => {

});
// Bonus: How enum compiled to Javascript
enum Status5 {
    PENDING, // 0
    IN_PROGRESS, // 1
    DONE, // 2
    CANCELLED, // 3
    }
    // compiled to javascript
    "use strict";
    var Status;
    (function (Status) {
    Status[Status["PENDING"] = 0] = "PENDING";
    Status[Status["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status[Status["DONE"] = 2] = "DONE";
    Status[Status["CANCELLED"] = 3] = "CANCELLED";
    })(Status || (Status = {}));
    
    Status['PENDING']; // 0
    Status[0]; // 'PENDING'
    
    enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml",
    }
    // compiled to javascript
    "use strict";
    var MediaTypes;
    (function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
    })(MediaTypes || (MediaTypes = {}));
    MediaTypes["JSON"]; // "application/json"
    MediaTypes["application/json"]; // undefined