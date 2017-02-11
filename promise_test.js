/**
 * Created by andrew on 1/19/17.
 */

function f1(p, callback) {
    console.log("F1 called"+ new Date());
    setTimeout(function () {
        console.log("F1 finished"+ new Date());
        if (p.length > 3) {
            callback(null, "f1 failed")
        } else {
            callback("f1 executed ok")
        }
    }, 3000);
}

function f2(p, callback) {
    console.log("F2 called"+ new Date());
    setTimeout(function () {
        console.log("F2 finished"+ new Date());
        if (p.length > 3) {
            callback(null, "f2 failed")
        } else {
            callback("f2 executed ok")
        }
    }, 1000);
}

function mainFunc(p1, p2, callback) {
    Promise.all([])
        .then(function (allData) {
            if (!allData[0].err && !allData[1].err) {
                callback("OK")
            } else {
                var errMess = "";
                if (allData[0].err) {
                    errMess += "Error while p1: " + allData[0].err + ". ";
                }
                if (allData[1].err) {
                    errMess += "Error while p2: " + allData[1].err + ". ";
                }
                callback(null, errMess);
            }
        });
}

mainFunc("5", "5", function (ok, err) {
   console.log("OK: "+ok + "; err: "+err);
});
