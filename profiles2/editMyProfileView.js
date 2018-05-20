/**/
    var msgDiv = document.getElementById('profileInfoMsgDiv');
    if (msgDiv) {


        var msg = '';

        msg = msg + '<div class="y-InfoMsg-JPN">';
msg = msg + '<h2 class="lotusHeading">当ポータルサイトに提供されるすべての個人情報は、以下の利用目的の範囲内で利用するものとします。</h2>';
msg = msg + '<p></p>';
msg = msg + '<ul>';
msg = msg + '<li>業務に関連する人や専門家を、組織や従来の枠組みを越えて探し、業務のスピードアップや効率アップにつなげる</li>';
msg = msg + '<li>従業員個人のスキルやノウハウを探し、問題解決や課題達成のスピードアップおよび新価値の創造につなげる</li>';
msg = msg + '<li>従業員個人の知識・知見・ノウハウ等を可視化し、共有する</li>';
msg = msg + '<li>従業員間のコミュニケーションを活性化する</li>';
msg = msg + '</ul>';
msg = msg + '</div>';
msg = msg + '<div class="y-InfoMsg-ENG">';
msg = msg + '<h2 class="lotusHeading">(Draft)</h2>';
msg = msg + '<h2 class="lotusHeading">All personal information provided to this Global Portal shall be used for the following purpose.</h2>';
msg = msg + '<p></p>';
msg = msg + '<ul>';
msg = msg + '<li type="sqare">To search for the right associate and experts up to business activity beyond the scope of organizations and conservative frameworks contributes to accelerate our business process, to improve its efficiency.</li>';
msg = msg + '<li type="sqare">To search for individual abilities and KNOW-HOW contributes to accelerate our problem solving and challenge achievements, to create new values.​</li>';
msg = msg + '<li type="sqare">To visualize and share individual knowledge and KNOW-HOW.</li>';
msg = msg + '<li type="sqare">To accelerate communication among associates .</li>';
msg = msg + '</ul>';
msg = msg + '</div>';


    msgDiv.innerHTML += msg;
}
