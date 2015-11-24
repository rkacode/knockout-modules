var require = {
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        'knockout': { deps: [ 'jquery'] },
        'blockUI': { deps: [ 'jquery'] },
        'tinymce-jquery' :{ deps: [ 'jquery', 'tinymce'] },
        'bindings' :{ deps: [ 'quill'] }
    },
    baseUrl: 'js',
    paths: {
        "jquery" : "lib/jquery/jquery",
        "blockUI" : "lib/jquery/jquery-blockui",
        "bootstrap" :  "lib/bootstrap",
        "knockout" : "lib/knockout/knockout",
        "knockout.validation" : "lib/knockout/knockout-validation",
        'knockout-jqueryui': 'lib/knockout-jqueryui',
        'jquery-ui': 'lib/jquery-ui',
        'tinymce-jquery' : 'lib/tinymce/jquery.tinymce.min',
        'bindings' : 'dc/bindings',
        'tinymce' : 'lib/tinymce/tinymce.min',
        'quill' : 'lib/quill/quill'
    }
};