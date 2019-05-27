function get_form(element) {
    while (element) {
        element = element.parentNode
        if (element.tagName.toLowerCase() == "form") {
            //alert( element ) //debug/test
            return element
        }
    }
    return 0; //error: no form found in ancestors
}

function get_child_form(element) {
    while (element) {
        var numitems = element.childNodes.length;
        for (var i = 0; i < numitems; i++) {
            element = element.childNodes[i]
            if (element.tagName.toLowerCase() == "form") {
                //alert( element ) //debug/test
                return element
            }
        }
    }
    return 0; //error: no form found in ancestors
}

function set_sort_order() {
    var numitems = document.getElementById('sortable').childNodes.length;
    var ids = '';
    for (var i = 0; i < numitems; i++) {
        var id = document.getElementById('sortable').childNodes[i].id;
        ids = ids += id + ',';
    }
    ids = ids.slice(0, ids.length - 1);
    document.getElementById('ids').value = ids;
    document.getElementById('sort-form').submit();
}

$(document).ready(function () {
    $('.summernote1000').summernote({
        placeholder: 'Type up to 1000 characters (click Code View to see all of the characters including HTML tags).',
        maxTextLength: 1000,
        codemirror: { // codemirror options
            theme: 'monokai'
        }
    });
});