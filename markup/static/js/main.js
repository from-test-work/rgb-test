import $ from 'jquery';
import {isMobile} from "../js/helpers/detect-devise";
import {breakpoints} from '../js/helpers/breakpoints.js';


import Navigation from '../../components/nav/nav';
import Modal from '../../components/modal/modal';
import SubmitingForm from '../../components/form/form';

import '../../components/header/header';
import '../../components/carusel/carusel';
// import '../../static/js/libraries/custom-file-input';


const modal = new Modal();
const navigation = new Navigation();

/*==============
====================      READY      =====================
========================================================*/
$(document).ready(() => {
    if (isMobile.any()) {
        $('body').addClass(`is-mobile is-${isMobile.any()[0]}`);
    }
    modal.init();
    navigation.init();
});

/*==============
====================      RESIZE      ====================
========================================================*/
$(window).resize(() => {
    navigation.resize(breakpoints);
});
