// ==UserScript==
// @name     yi5-v4: Inserting additional note in editMyProfileView.do
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function(){

    var noteMain_en = "(Draft)<br>All personal information provided to this Global Portal shall be used for the following purpose.";
    var noteLi1_en  = "To search for the right associate and experts up to business activity beyond the scope of organizations and conservative frameworks contributes to accelerate our business process, to improve its efficiency.";
    var noteLi2_en  = "To search for individual abilities and KNOW-HOW contributes to accelerate our problem solving and challenge achievements, to create new values.";
    var noteLi3_en  = "To visualize and share individual knowledge and KNOW-HOW.";
    var noteLi4_en  = "To accelerate communication among associates.";

    var noteMain_ja = "当ポータルサイトに提供されるすべての個人情報は、以下の利用目的の範囲内で利用するものとします。";
    var noteLi1_ja  = "業務に関連する人や専門家を、組織や従来の枠組みを越えて探し、業務のスピードアップや効率アップにつなげる。";
    var noteLi2_ja  = "従業員個人のスキルやノウハウを探し、問題解決や課題達成のスピードアップおよび新価値の創造につなげる。";
    var noteLi3_ja  = "従業員個人の知識・知見・ノウハウ等を可視化し、共有する。";
    var noteLi4_ja  = "従業員間のコミュニケーションを活性化する。";

    //	var userLanguage = window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage;
    //  var noteMain = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteMain_ja : noteMain_en;
    //  var noteLi1  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi1_ja : noteLi1_en;
    //  var noteLi2  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi2_ja : noteLi2_en;;
    //  var noteLi3  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi3_ja : noteLi3_en;;
    //  var noteLi4  = (userLanguage == "ja" || userLanguage == "ja-JP") ? noteLi4_ja : noteLi4_en;;

    var noteMain = (document.documentElement.lang == "ja") ? noteMain_ja : noteMain_en;
    var noteLi1  = (document.documentElement.lang == "ja") ? noteLi1_ja : noteLi1_en;
    var noteLi2  = (document.documentElement.lang == "ja") ? noteLi2_ja : noteLi2_en;
    var noteLi3  = (document.documentElement.lang == "ja") ? noteLi3_ja : noteLi3_en;
    var noteLi4  = (document.documentElement.lang == "ja") ? noteLi4_ja : noteLi4_en;

    //console.log("document.URL=" + document.URL);
    //var regexp = new RegExp("/profiles/html/editMyProfileView.do");
    //if (regexp.test(document.URL)) {

    if (typeof XPathResult != "undefined") {
        //console.log("document.URL=" + document.URL);
        //var regexp = new RegExp("/profiles/html/editMyProfileView.do");
        //if (regexp.test(document.URL)) {
        var res = document.evaluate('//div[@class="lotusTabContainer"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        //console.log("res.snapshotLength=" + res.snapshotLength);
        //if (res.snapshotLength==1) {
            var node = res.snapshotItem(0);
            if (document.getElementById("yi201805211340") == null) {
                var newDivNode = document.createElement("div");
                newDivNode.setAttribute("id", "yi201805211340");
                //    	  		newDivNode.setAttribute("style", "color:red; font-weight;bold;");
                newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
                var newTextNode = document.createTextNode(noteMain);
                newDivNode.appendChild(newTextNode);
                var newUlNode = document.createElement("ul");
                newUlNode.setAttribute("type", "circle");
                var newLiNode1 = document.createElement("li");
                newLiNode1.appendChild(document.createTextNode(noteLi1));
                newUlNode.appendChild(newLiNode1);
                var newLiNode2 = document.createElement("li");
                newLiNode2.appendChild(document.createTextNode(noteLi2));
                newUlNode.appendChild(newLiNode2);
                var newLiNode3 = document.createElement("li");
                newLiNode3.appendChild(document.createTextNode(noteLi3));
                newUlNode.appendChild(newLiNode3);
                var newLiNode4 = document.createElement("li");
                newLiNode4.appendChild(document.createTextNode(noteLi4));
                newUlNode.appendChild(newLiNode4);
                newDivNode.appendChild(newUlNode);
                node.parentElement.insertBefore(newDivNode, node);
            }
        //}
        //}
    }
    else {
        var rootNode1 = document.getElementById('_profileEditScene_div');
        var node = rootNode1.children[3];
        if (document.getElementById("yi201805211340") == null) {
            var newDivNode = document.createElement("div");
            newDivNode.setAttribute("id", "yi201805211340");
            //    	  		newDivNode.setAttribute("style", "color:red; font-weight;bold;");
            newDivNode.setAttribute("style", "padding: 0.5em 1em; margin: 2em 0; font-weight: bold; color: #36393c; background: #def1fa; border: solid 2px #4cb0d7; border-radius: 5px;");
            var newTextNode = document.createTextNode(noteMain);
            newDivNode.appendChild(newTextNode);
            var newUlNode = document.createElement("ul");
            newUlNode.setAttribute("type", "circle");
            var newLiNode1 = document.createElement("li");
            newLiNode1.appendChild(document.createTextNode(noteLi1));
            newUlNode.appendChild(newLiNode1);
            var newLiNode2 = document.createElement("li");
            newLiNode2.appendChild(document.createTextNode(noteLi2));
            newUlNode.appendChild(newLiNode2);
            var newLiNode3 = document.createElement("li");
            newLiNode3.appendChild(document.createTextNode(noteLi3));
            newUlNode.appendChild(newLiNode3);
            var newLiNode4 = document.createElement("li");
            newLiNode4.appendChild(document.createTextNode(noteLi4));
            newUlNode.appendChild(newLiNode4);
            newDivNode.appendChild(newUlNode);
            node.parentElement.insertBefore(newDivNode, node);
        }
    }//end of else
    //}
});
