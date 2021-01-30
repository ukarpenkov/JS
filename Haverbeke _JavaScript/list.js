function arrayToList(arr) {
    for (var i = arr.length - 1; i >= 0; --i) {
        debugger
        var nextRest = list || null;
        var list = {};

        list["value"] = arr[i];
        list["rest"] = nextRest;
    }

    console.log(list)
}

arrayToList([1, 2, 3])