function _getEmployees(cb) {
    $.ajax({ 
        type: "get",
        url: "https://reqres.in/api/users",
        success: function (response) {
            cb(response)
         }
    });   
}