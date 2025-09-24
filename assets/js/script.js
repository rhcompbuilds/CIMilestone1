function openlink(selectElement) {
    var url = selectElement.value;
    if (url) {
        window.open(url, '_blank'); // Opens the link in a new tab
    }
}