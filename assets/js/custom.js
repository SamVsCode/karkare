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

$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('.dataTable tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" class="form-control" placeholder='+title+' />' );
    } );
 
    // DataTable
    var datatable = $('.dataTable').DataTable({
        "scrollX": true,
    });
 
    // Apply the search
    datatable.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            console.log('changing');
            if ( that.search() !== this.value ) {
                that
                .search( this.value )
                .draw();
            }
        } );
    } );
} );
