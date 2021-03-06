(function ($) {
    "use strict";
    var mainApp = {
        main_fun: function () {
            /*====================================
              LOAD APPROPRIATE MENU BAR
           ======================================*/
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///
    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));


// (function(){
//     $('.dataTable').dataTable();
// }());

$(document).ready(function () {

    $.fn.dataTableExt.afnFiltering.push(
        function (oSettings, aData, iDataIndex) {
            var minDate = $("#min").val();
            var maxDate = $("#max").val();
            var date = new Date(aData[3]).getTime();
            if(minDate!== "" && minDate !== undefined && minDate !== "undefined" &&
                maxDate!== "" && maxDate !== undefined && maxDate !== "undefined"){
                    var minTime = new Date(minDate).getTime();
                    var maxTime = new Date(maxDate).getTime();     
                    if(date >= minTime && date <= maxTime){
                        return true;
                    }else{
                        return false
                    }
                }else{
                    return true
                }
        }
    );


    // Setup - add a text input to each footer cell
    $('#dataTable tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" style="width: 100%" class="form-control" placeholder=' + title + ' />');
    });

    // DataTable
    var datatable = $('#dataTable').DataTable({
        "scrollX": true,
        "columnDefs": [
            { "width": "50px", "targets": 0 }
        ],
        buttons: ['copy', 'csv', 'excel']
    });

    $("#min").on('change', function(){
        datatable.draw();
    });
    $("#max").on('change', function(){
        datatable.draw();
    });

    // Apply the search
    datatable.columns().every(function () {
        var that = this;
        $('input', this.footer()).on('keyup change', function () {
            console.log('changing');
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
});
