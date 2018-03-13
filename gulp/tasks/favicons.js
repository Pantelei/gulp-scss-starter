module.exports = function() {
    $.gulp.task("favicons", function() {
        return $.gulp.src("./src/img/favicons/*.{jpg,jpeg,png,gif}")
            .pipe($.gp.favicons({
                icons: {
                    appleIcon: true,
                    favicons: true,
                    online: false,
                    appleStartup: false,
                    android: false,
                    firefox: false,
                    yandex: false,
                    windows: false,
                    coast: false
                }
            }))
            .pipe($.gulp.dest("./dest/img/favicons/"))
            .pipe($.gp.debug({"title": "favicons"}));
    });
}