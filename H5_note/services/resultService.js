app.factory('$resultService', function() {
    var result = {
        "list": [false,false,false],
        "final": false
    };
    result.getFinal = function() {
        result.final = !!(result.list[0] && result.list[1] && result.list[2]);
        return result.final;
    };
    result.change = function(i,check) {
        result.list[i] = check;
        return result.list[i];
    };
    return result;
});
