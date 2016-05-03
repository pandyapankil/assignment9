ko.bindingHandlers.fadeText = {
    update: function(element, valueAccessor) {
        $(element).hide();
        ko.bindingHandlers.text.update(element, valueAccessor);
        $(element).fadeIn();
    }
};

function AppViewModel() {
    var self = this;
    self.input = ko.observable("");
    self.comment = ko.observable("");
    self.comments = ko.observableArray([{
        comment: 'This is the first comment!'
    }, {
        comment: 'Here\'s the second one!'
    }, {
        comment: 'And this is one more.'
    }, {
        comment: 'Here is another one!'
    }]);
    self.check = function(data, event) {
        try {
            if (event.which == 13) {
                if (self.input().trim() != '') {
                    var comment = {
                        comment: self.input()
                    };
                    self.comments.push(comment);
                    self.input('');
                }
                return false;
            }
            return true;
        } catch (e) {}
    };
    self.addComment = function() {
        if (self.input().trim() != '') {
            var comment = {
                comment: self.input()
            };
            self.comments.push(comment);
            self.input('');
        }
    };

}

ko.applyBindings(new AppViewModel());