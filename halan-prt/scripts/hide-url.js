$('a[data-href]').each(function () {
    let href = this.dataset.href

    $(this).click(function () {
        if (href.toLowerCase().indexOf("#") >= 0) {
            // to prevent showing the "#" in browser bar
            // "nothing";
        } else {
            window.open(href, '_self');
        }
    })
})