function alternateText(node){
    str = node.textContent
    str_constructor = ""
    for (var i = 0; i < node.textContent.length; i++){
        var randCase = Math.random() < 0.5 ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase()
        str_constructor += randCase
    }
    node.textContent = str_constructor
}
function expandNodes(nodes){
    nodes.forEach(function(node){
        if (node.nodeType == 3) {
            alternateText(node)
        } else {
            expandNodes(node.childNodes)
        }
    })
}
var parent = document.getElementsByTagName("body")[0]
expandNodes(parent.childNodes)
