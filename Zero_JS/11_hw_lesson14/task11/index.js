var contextMenu = document.getElementById('context-menu');

var contextableArea = document.getElementById('area-with-context-menu');

function hideContextMenu(e) {
    contextMenu.classList.add('hidden');
}

function showContextMenu(e) {
    //отменяет стандартное действие

    e.preventDefault();
    contextMenu.classList.remove('hidden');
    e.pageX = e.clientX
    contextMenu.pageX = contextMenu.clientX

    contextMenu.click
    // ЗДЕСЬ ПИШЕМ СВОЙ КОД!!!!
    //помним, что в объекте ивента e содержится много пропертей, среди которых и св-ва с координатами клика  








};

contextableArea.addEventListener('contextmenu', showContextMenu);
contextableArea.addEventListener('click', hideContextMenu);