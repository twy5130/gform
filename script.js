var qc, qcLen, ans, sumbit, viewResult; qc = document.querySelector(".freebirdFormviewerViewItemList").children;
qcLen = qc.length; sumbit = document.querySelector(".appsMaterialWizButtonPaperbuttonContent"); viewResult = document.querySelector(".appsMaterialWizButtonPaperbuttonContent");

function fillall() {
    questions = {};
    for (let i = 0; i < qcLen; i++) {
        q = qc[i].querySelector(".freebirdFormviewerComponentsQuestionBaseTitle").textContent
        a = qc[i].querySelector(".freebirdFormviewerComponentsQuestionRadioChoicesContainer").querySelector(".docssharedWizToggleLabeledContainer").textContent;
        questions[q.toString()] = a.toString();
        qc[i].querySelector(".freebirdFormviewerComponentsQuestionRadioChoicesContainer");
        ans = qc[i].querySelector(".freebirdFormviewerComponentsQuestionRadioChoicesContainer").children;
        ans[0].children[0].click();
    }
    localStorage.setItem("gforms", JSON.stringify(questions));
    sumbit.click();
}

function getAns() {

    gform = localStorage.getItem("gforms");
    if (gform != "" && gform != null) {
        questions = JSON.parse(gform);
    } else {
        questions = {};
    }

    for (let i = 0; i < qcLen; i++) {
        a = qc[i].querySelector(".freebirdFormviewerViewItemsItemGradingCorrectAnswerBox");
        if (a != null) {
            q = qc[i].querySelector(".freebirdFormviewerViewItemsItemItemTitle").textContent;
            a = a.textContent;
            questions[q.toString()] = a.toString();
        }
    }

    localStorage.setItem("gforms", JSON.stringify(questions));

}

function fillAns() {
    var qc, qcLen, ans, sumbit, viewResult; qc = document.querySelector(".freebirdFormviewerViewItemList").children;
    qcLen = qc.length, answers = []; sumbit = document.querySelector(".appsMaterialWizButtonPaperbuttonContent"); viewResult = document.querySelector(".appsMaterialWizButtonPaperbuttonContent");

    gform = JSON.parse(localStorage.getItem("gforms"));

    for (let i = 0; i < qcLen; i++) {

        q = qc[i].querySelector(".freebirdFormviewerComponentsQuestionBaseTitle").textContent;

        a = qc[i].querySelectorAll(".docssharedWizToggleLabeledLabelText");

        for (let ii = 0; ii < a.length; ii++) {
            if (gform[q].indexOf(a[ii].textContent) > -1) {
                a[ii].click();
                break;
            }
        }

    }

    sumbit.click();

}
