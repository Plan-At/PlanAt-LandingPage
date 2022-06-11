export function setEditableField(elementID, content) {
    document.getElementById(elementID).placeholder = content;
    document.getElementById(elementID).value = content; // so can update existing value
}