// ==UserScript==
// @id flux-monkey
// @name Flux Monkey (Arch Linux BBS)
// @namespace https://github.com/kynikos/flux-monkey
// @author Dario Giovannetti <dev@dariogiovannetti.net>
// @version 1.0.0
// @description Helper scripts for the Arch Linux BBS
// @website https://github.com/kynikos/flux-monkey
// @supportURL https://github.com/kynikos/flux-monkey/issues
// @updateURL https://raw.github.com/kynikos/flux-monkey/master/FluxMonkey.meta.js
// @downloadURL https://raw.github.com/kynikos/flux-monkey/master/FluxMonkey.user.js
// @match https://bbs.archlinux.org/*
// ==/UserScript==

var HighlightOldPosts = function () {
    var brdmain = document.getElementById('brdmain');

    if (brdmain) {
        var blockposts = brdmain.getElementsByClassName('blockpost');

        for (var b = 0; b < blockposts.length; b++) {
            var h2 = blockposts[b].getElementsByTagName('h2')[0];
            // TODO: Make sure the link's href starts with "viewtopic.php"
            var viewtopic = h2.getElementsByTagName('a')[0];

            // Recent posts start with 'Today' or 'Yesterday'; old posts start
            // with the year number
            var re = /^[0-9]/;

            if (re.test(viewtopic.innerHTML)) {
                viewtopic.style.backgroundColor = 'orangered';
                viewtopic.style.color = 'white';
                viewtopic.style.fontWeight = 'bold';
            }
        }
    }
};

HighlightOldPosts();
