require(['knockout', 'knockout.validation', 'jquery', 'quill', 'bootstrap', 'knockout-jqueryui/spinner','knockout-jqueryui/datepicker', 'blockUI'], function(ko, validation, $, Quill){

    function IndexViewModel() {
        var self = this;

        self.name = ko.observable().extend({ required : true });
        self.minutes = ko.observable().extend( { required: true });
        self.shortDescription = ko.observable('');
        self.fromDate = ko.observable();
        self.htmlObservable = ko.observable("<strong>Quill!</strong>");

        self.saveChanges = function() {
            var errors = validation.group(this);

            console.log(self.shortDescription());

            if (errors().length === 0) {
                $.blockUI({ css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: '#000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    opacity: .5,
                    color: '#fff'
                }});

                setTimeout(function() {
                    $.unblockUI();
                }, 2000);
            } else {
                errors.showAllMessages(true);
            }
        }
    }

    $(function(){

        var basicEditor = new Quill('#basic');
        basicEditor.addModule('toolbar', {
            container: '#basic'
        });

        var model = new IndexViewModel();
        ko.applyBindings(model);

    });
});