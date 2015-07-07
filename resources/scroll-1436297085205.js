(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-720b1535-3f32-4394-93c6-e5354c045b67 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-a6b50c07-6a49-4aa3-89b8-ec8f7bfa8978 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-a6b50c07-6a49-4aa3-89b8-ec8f7bfa8978 #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-59d6f0c3-15da-409c-9cd1-ba24117848be .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-59d6f0c3-15da-409c-9cd1-ba24117848be #s-Panel_1").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-6f6abf62-283f-46fa-97b6-5e9886fac7b6 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);