function redirect() {
    var element = document.getElementById("disclamer");
    var redirect_link = "https://en.wikipedia.org/wiki/Financial_adviser";

    function openLinkInNewTab() {
        window.open(redirect_link, '_blank');
        element.removeEventListener("click", openLinkInNewTab);
    }

    element.addEventListener("click", openLinkInNewTab);
}
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function openLinkInNewTab(linkId) {
    var linkElement = document.getElementById(linkId);
    if (linkElement) {
        linkElement.addEventListener("click", function(event) {
            event.preventDefault();
            window.open(linkElement.href, '_blank');
        });
    }
}
openLinkInNewTab("facebook_login");

