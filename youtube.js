function removeShort() {
    const targets = document.querySelectorAll('ytd-rich-section-renderer');

    /**
     * in theory
     * the first ytd-rich-section-renderer is the toolbar
     * the second is the short feed
     */
    if (targets.length > 1) {
        targets[1].remove();
    }
}

function alignVideoPlayer() {
    const target = document.getElementById('columns');

    // align the player
    if (target) {
        target.style.flexDirection = 'column';
        target.style.alignItems = 'center';
    }
}

/**
 * a small wrapper for the error, throw a `console.error`
 * @param error error message in string
 */
function onYoutubeError(error) {
    console.error(`IPP - on error: ${error}`);
}

/**
 * grant clearance of the setting say so
 */
function clearanceForVideo() {
    browser.storage.sync.get('youtube').then((value) => {
        if (value.youtube === 'false') return;
        alignVideoPlayer();
    }, onYoutubeError)
}

/**
 * grant clearance of the setting say so
 */
function clearanceForShort() {
    browser.storage.sync.get('youtube').then((value) => {
        if (value.youtube === 'false') return;
        removeShort();
    }, onYoutubeError)
}

clearanceForShort();
clearanceForVideo();
