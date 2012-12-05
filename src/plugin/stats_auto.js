/**
 * Coverage for off-package LMD modules
 *
 * Flag "stats_auto"
 *
 * This plugin depends on stats and stats_sendto
 */
/**
 * @name sandbox
 */
(function (sb) {
    var timeout,
        host = sb.stats_host;

    if (!host) return;

    if (host === true) {
        host = 'http://' + sb.global.location.hostname + ':8081';
    }

    function updateStats() {
        if (timeout) return;

        timeout = setTimeout(function () {
            sb.require.stats.sendTo(host);
            timeout = 0;
        }, 2000);
    }

    var events = 'click0keyup0orientationchange0resize0scroll0focus'.split(0);
    for (var i = 0, c = events.length; i < c; i++) {
        sb.global.document.body.addEventListener(events[i], updateStats, false);
    }

    sb.on('lmd-require:before-check', updateStats);
}(sandbox));