function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
   }

updateInnerHTML('h1', 'hello');

function strong(value) {
    return '<strong>' + value + '</strong>';
}

var paragraphUpdate = document.querySelector('p.important').innerHTML;

paragraphUpdate = strong(paragraphUpdate)

updateInnerHTML('p.important', paragraphUpdate);