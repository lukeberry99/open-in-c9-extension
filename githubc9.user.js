// ==UserScript==
// @name Cloud9 button for GitHub
// @version 1.1.1
// @description This extension adds a button to GitHub that lets you edit your projects directly in Cloud9 IDE
// @icon https://addons.cdn.mozilla.net/user-media/addon_icons/417/417300-64.png
// @match https://github.com/*
// @grant none
// ==/UserScript==

(function () {

var defaultBgImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNp8kr9Lw0AUx5ukTdMfaWvALlKyKKWNGBBxkIjUSagoKbQ4Z01HcayD0MFJcChF7f9Q6lJQQRycpLM4tC4luhVd1Kbn90ojJUYPPlzu7r1vvvfeMYQQ3x9DBPJk/gAvoA+8E6iQByJYKxaLeiAQuGEYZhCNRh/T6fQRUjivHPcGDwSglkolHQJvEDpF8gaEzFAo1Adn/wnR5CWw3mq1dhuNRikYDN5D6AR7i7lcbp7GVavVAsdxtmmaBaznADMtRBcrNDmZTHb8fj9xYFk2jzMJrq4hmsX3ajwe79K4VCp1q6rqMYQ5R2jGsqzNRCLxzPM8mSYcDhuTZuQzmcwydRyLxazpGFEUrxyhWcMw9nEV4kaSpG6tVlMm9hfq9fqeVxxMbY0LrOv6IYpIvBAEgcDtAeI0RVGaXjEoQZmF7U9ZlpvD4fALdfC5wR+f2u12p1KpZHu93rb73LZt32g0evhpH+5eph2hDiKRCEG7x8DNu6ZpF5gHzh6FOqENgZHzX+8IIwsuwevkBf8Ffel3YMfJ/RZgALTrMYKs/GM2AAAAAElFTkSuQmCC)";

var target = document.querySelector(".clone-options");

if (target) {
    var style = "background-repeat: no-repeat;" +
        "background-position: left 4px;" +
        "padding: 2px 0 0 26px;" +
        "background-image: " + defaultBgImage + ";";

    var link = document.createElement("a");
    link.className = "btn btn-sm sidebar-button c9-button";
    link.title = "Open this repository in Cloud9";
    link.rel = "nofollow";
    link.target = "_blank";

    var parts = location.pathname.split("/");
    var user = parts[1];
    var repo = parts[2];

    var url = "git@github.com:" + user + "/" + repo + ".git";

    link.href = "https://c9.io/open/git/?url=" + url;

    var icon = document.createElement("span");
    icon.style.cssText = style;

    link.appendChild(icon);
    link.appendChild(document.createTextNode("Clone in Cloud9"));

    target.parentNode.insertBefore(link, target.nextSibling);
}

})();
