const footerBar = `
<footer class="footer">
        <div class="container">
            
            <div class="footer-links">
                <div class="columns">
                    <div class="column is-6">
                        <p class="bd-footer-link-title">
                            <a href="#">Home</a>
                        </p>
                        <p class="bd-footer-link-title">
                            <a href="#">Blog</a>
                        </p>
                    </div>

                    <div class="column is-4">
                        <p class="bd-footer-link-title">
                            <a href="#">Documentation</a>
                        </p>
                    </div>

                    <div class="column is-4 is-right">
                        <p class="bd-footer-link-title">
                            <a href="#">More</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="has-text-centered">© vJavaScript.com <span id="copyDate"></span></div>
        </div>
    </footer>
`;
document.querySelector('.injectFooterBar').innerHTML = footerBar;

(function copyrightYear() {
    let copyDate = document.querySelector('#copyDate');
    copyDate.innerHTML += new Date().getFullYear();
})();