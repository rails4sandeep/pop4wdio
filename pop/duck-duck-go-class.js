const _searchInput = new WeakMap();
const _searchButton = new WeakMap();

class DuckDuckGoClass{

    constructor() {
        _searchInput.set(this,"#search_form_input_homepage");
        _searchButton.set(this, "#search_button_homepage");
    };

    get searchInput() {
        return _searchInput.get(this);
    };

    get searchButton() {
        return _searchButton.get(this);
    };
}

module.exports = DuckDuckGoClass;
