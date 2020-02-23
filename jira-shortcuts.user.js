// ==UserScript==
// @name        Jira shortcuts
// @description Defines a list of keyboard shortcuts in Jira
// @author      yusitnikov
// @version     1.0
// @updateURL   https://github.com/yusitnikov/jira-shortcuts/raw/master/jira-shortcuts.user.js
// @match       https://*.atlassian.net/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function() {
    document.body.addEventListener('keydown', function(ev) {
        if (ev.altKey && ev.key === 't') {
            var button = null;
            document.body.querySelectorAll('*').forEach(function(el) {
                if (el.innerText === 'Open Tempo') {
                    button = el;
                }
            });
            if (button) {
                button.click();
            }
        }
    });
})();
