// ==UserScript==
// @name         New Userscript
// @namespace    https://ficbook.net/
// @version      0.1
// @description  Убирает горячие работы из поисковой выдачи.
// @author       You
// @match        https://ficbook.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';

    $('.fanfic-inline-hot').remove();
})();
