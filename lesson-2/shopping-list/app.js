
/*
In terms of user experience, your shopping list app must allow users to:

enter items to purchase by entering text and:
1. hitting "Return".
or
2. clicking the "Add item" button

check and uncheck items on the list by clicking the "Check" button

permanently remove items from the list.

Hint: you may find it helpful to read up on and use the following jQuery methods:
.submit(), preventDefault(), toggleClass(), and closest().
*/

/*
Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
*/
/*
$(event.target).closest('li').remove();
$(this).closest('li').find('span').toggleClass('shopping-item__checked');
*/

'use strict';

// Single state object
var state = {
    items: []
};

// add new item to the state object
var addItem = function(state, item, checked) {
    if (state.items.indexOf(item) < 0) {
        state.items.push({'item': item, 'checked': checked});
    }
};

// toggle checked property for a given iten id
var toggleItem = function(state, itemId) {
//    console.log("toggleItem (1); "+JSON.stringify(state));
    var checked = state.items[itemId].checked;
    state.items[itemId].checked = ! checked;
//    console.log("toggleItem (2); "+JSON.stringify(state));
};

// delete item for a given iten id
var deleteItem = function(state, itemId) {
//    console.log("deleteItem (1); "+JSON.stringify(state));
    state.items.splice(itemId, 1);
//    console.log("deleteItem (2); "+JSON.stringify(state));
};

// render shopping list item
var renderItem = function(item, id) {
    var template = '<li date-item-id="{{3}}">\
    <span class="shopping-item {{2}}">{{1}}</span>\
    <div class="shopping-item-controls">\
        <button class="js-shopping-item-toggle">\
            <span class="button-label">check</span>\
        </button>\
        <button class="js-shopping-item-delete">\
            <span class="button-label">delete</span>\
        </button>\
    </div>\
    </li>';
    return template.replace('{{1}}', item.item)
        .replace('{{2}}', item.checked ? 'shopping-item__checked' : '')
        .replace('{{3}}', id);
};

// Render shopping list
var renderList = function(state, element) {
    var cntr = 0;
    var itemsHTML = state.items.map(function(item) {
        return renderItem(item, cntr++);
    });
    element.html(itemsHTML);
};

var addTestData = function(state) {     // set initial data state
    addItem(state, 'apples', false);
    addItem(state, 'oranges', false);
    addItem(state, 'milk', true);
    addItem(state, 'bread', false);
    addItem(state, 'fish', true);
};

$(function() {
/*
enable initial data here

    addTestData(state);
    renderList(state, $('.shopping-list'));     // render list, attach to .shopping-list
*/
    $('#js-shopping-list-form').on({        // add item
        'submit': function(event) {         // on form submit
            event.preventDefault();             // prevent form submission
            addItem(state, $('#js-add-item').val(), false);
            renderList(state, $('.js-shopping-list'));
//            $('#js-add-item').val('');      // reset add item form value to empty.
            this.reset();       // resets the form
        }
    });

/*
Event delegation, using .js-shopping-list as exists when html is first rendered
*/

    $('.js-shopping-list').on('click', '.js-shopping-item-toggle', function() {
            var itemId = $(event.target).closest('li').attr('date-item-id');
            toggleItem(state, itemId);
            renderList(state, $('.shopping-list'));
        }
    );

    $('.js-shopping-list').on('click', '.js-shopping-item-delete', function(event) {
            var itemId = $(event.target).closest('li').attr('date-item-id');
            deleteItem(state, itemId);
            renderList(state, $('.shopping-list'));
        }
    );
});
