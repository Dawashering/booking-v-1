$(document).ready(function(){
    var dtToday = new Date();
    var day = ("0" + dtToday.getDate()).slice(-2);
    var month = ("0" + (dtToday.getMonth() + 1)).slice(-2);
    
    if(month < 10)
    month = '0' + month.toString();
    if(day < 10)
    day = day.toString();
    var maxDate = dtToday.getFullYear()+"-"+(month)+"-"+(day) ;
    
    document.getElementById('dateControl').value = maxDate;
    
    $('#dateControl').attr('min',maxDate);


    const date = $("#dateControl").val();
        
        $.get('/'+ date, function(data, status) {
            var row = "";
            for(var i = 0; i < data.length; i++) {
                row = row + "<tr><td>" + data[i].equipment +"</td>" + "<td>" + data[i].times +"</td>" + "<td>" + data[i].date +"</td></tr>"; 
            }
            $("#booked-items").append(row);
        });
        $("#dateControl").change(() => {
        const date = $("#dateControl").val();
        
        $.get('/'+ date, function(data, status) {
            console.log(data);
            $("#booked-items").empty();
            var row = "";
            for(var i = 0; i < data.length; i++) {
                row = row + "<tr><td>" + data[i].equipment +"</td>" + "<td>" + data[i].times +"</td>" + "<td>" + data[i].date +"</td></tr>"; 
            }
            $("#booked-items").append(row);
        });
    });
})































































// $(document).ready(function(){
//     var dtToday = new Date();
//     var day = ("0" + dtToday.getDate()).slice(-2);
//     var month = ("0" + (dtToday.getMonth() + 1)).slice(-2);
    
//     if(month < 10)
//     month = '0' + month.toString();
//     if(day < 10)
//     day = day.toString();
//     var maxDate = dtToday.getFullYear()+"-"+(month)+"-"+(day) ;
    
//     document.getElementById('dateControl').value = maxDate;
    
//     $('#dateControl').attr('min',maxDate);


//     const date = $("#dateControl").val();
        
//         $.get('/'+ date, function(data, status) {
//             var row = "";
//             for(var i = 0; i < data.length; i++) {
//                 row = row + "<tr><td>" + data[i].equipment +"</td>" + "<td>" + data[i].times +"</td>" + "<td>" + data[i].date +"</td></tr>"; 
//             }
//             $("#booked-items").append(row);
//         });
//         $("#dateControl").change(() => {
//         const date = $("#dateControl").val();
        
//         $.get('/'+ date, function(data, status) {
//             console.log(data);
//             $("#booked-items").empty();
//             var row = "";
//             for(var i = 0; i < data.length; i++) {
//                 row = row + "<tr><td>" + data[i].equipment +"</td>" + "<td>" + data[i].times +"</td>" + "<td>" + data[i].date +"</td></tr>"; 
//             }
//             $("#booked-items").append(row);
//         });
//     });
// })




