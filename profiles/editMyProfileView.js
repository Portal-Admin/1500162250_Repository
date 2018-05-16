// ==UserScript==
// @name     editMyProfileView
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){
  //console.log("document.URL=" + document.URL);
  var regexp = new RegExp("/profiles/html/editMyProfileView.do");
  if (regexp.test(document.URL)) {
    var res = document.evaluate('//div[@class="lotusMeta lotusSection"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    //console.log("res.snapshotLength=" + res.snapshotLength);
    if (res.snapshotLength==1) {
      var node = res.snapshotItem(0);
      var pNode = document.createElement("p");
      pNode.setAttribute("style", "color:red; font-weight;bold;");
      var newTextNode = document.createTextNode("ここに追加のメッセージを入れる。例えば、クレジットカード情報を含めないで下さい等。");
      pNode.appendChild(newTextNode);
      node.appendChild(pNode);    
    }

    var res2 = document.evaluate('//table[@id="tableEditProfileContactInfo"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	//console.log("res2=" + res2);
    //console.log("res2.snapshotLength=" + res2.snapshotLength);
    if (res2.snapshotLength==1) {
      var tableNode2 = res2.snapshotItem(0);
      //console.log("tableNode2=" + tableNode2);
      //console.log("tableNode2.rows.length=" + tableNode2.rows.length);
      var newTableRow2 = tableNode2.insertRow(tableNode2.rows.length-1);
      //console.log("newTableRow2=" + newTableRow2);
      var newCell2  = newTableRow2.insertCell(0);
      //console.log("newCell2=" + newCell2);
      newCell2.colSpan=2;
      newCell2.setAttribute("style", "color:red; font-weight;bold;");
      var newText2 = document.createTextNode('ここに追加のメッセージを入れる。例えば、クレジットカード情報を含めないで下さい等。。');
      newCell2.appendChild(newText2);
    }

    var res3 = document.evaluate('//table[@id="tableEditProfileAboutMe"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	//console.log("res3=" + res3);
    //console.log("res3.snapshotLength=" + res3.snapshotLength);
    if (res3.snapshotLength==1) {
      var tableNode3 = res3.snapshotItem(0);
      //console.log("tableNode3=" + tableNode3);
      //console.log("tableNode3.rows.length=" + tableNode3.rows.length);
      var newTableRow3 = tableNode3.insertRow(tableNode3.rows.length-1);
      //console.log("newTableRow3=" + newTableRow3);
      var newCell3  = newTableRow3.insertCell(0);
      //console.log("newCell3=" + newCell3);
      newCell3.setAttribute("style", "color:red; font-weight;bold;");
      var newText3 = document.createTextNode('ここに追加のメッセージを入れる。例えば、クレジットカード情報を含めないで下さい等。。');
      newCell3.appendChild(newText3);
    }
  }
  
});
