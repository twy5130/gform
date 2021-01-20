function script() {
    document.addEventListener("click", function (e) {
        document.body.style.border = "#f0f solid 10px"
    });
}

// script()
browser.tabs.executeScript({ file: "/content_scripts/beastify.js" })
    // browser.tabs.query({ active: true, currentWindow: true })
    .then(script)

// browser.tabs.executeScript({ file: "./form.js" })
//     .then(listenForClicks)
//     .catch(reportExecuteScriptError);
