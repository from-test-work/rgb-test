import $ from "jquery";
import 'jquery-mask-plugin';
import '../../static/js/libraries/custom-file-input'
// import Modal from '../modal/modal';
//
// console.log(Modal);
// const modal = new Modal();

export default class Form {
    constructor(opts) {
        this.$loading = $('#loading');
        this.$body = $('body');
        this.$modal = $('#modal');
        this.$content = this.$modal.find('.modal__content');
        $.extend(this, opts);
    };

    init() {
        const $form = $('#consultation');
        const labelName = $form.find($('[name="user_name"]'));
        const labelPhone = $form.find($('[name="user_phone"]'));
        const labelText = $form.find($('[name="user_text"]'));
        const $button = $form.find('button');

        const arr = [labelName, labelPhone, labelText];

        $('[name="user_phone"]').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___-__-__"});
        this.validateForm(arr);

        $('#file-3').on('change', function() {
            this.nextElementSibling.querySelector('span').innerHTML =
            this.files[0].name
        });

        $button.on('click', () => {
            this.sendAjaxForm($form, 'mail.php');
        });
    }

    sendAjaxForm($form, params) {
        const httpRequest = [location.origin, params].join('/');

        $.ajax({
            url: httpRequest, //url страницы (action_ajax_form.php)
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#consultation").serialize(),

            success: function (response) { //Данные отправлены успешно
                console.warn(response, 'OK');
                return response;
            },
            beforeSend: () => {
                this.$loading.show();
            },
            error: function (response) {
                console.warn(response, 'Ошибка. Данные не отправлены.');
                return JSON.parse(data);
            },
            complete: () => {
                $("#btn").attr('disabled', 'true');
                this.$loading.hide();
                this.$body.removeClass('modal-is-open');
                this.$modal.parent()
                    .fadeOut()
                    .css('overflowY', 'hidden');
                this.$content.empty();
            }
        });
    }


    validateForm(formFields) {
        const $form = $('#consultation');
        const labelPhone = $form.find($('[name="user_phone"]'));
        const $button = $form.find('button');
        function isValidatePhone(selectorPhone) {
            const filter = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            let phoneValue = $(selectorPhone).val();
            return (filter.test(phoneValue)) ? true : false;
        }

        formFields.forEach(item => {
            item.blur(() => {
                if (item[0] === labelPhone[0]) {
                    if (isValidatePhone(item)) {
                        item.addClass('valid');
                        item.css('border-color', 'rgba(255,255,255, .3)');
                    } else {
                        item.removeClass('valid');
                        item.css('border-color', 'red');
                    }
                } else {
                    if (item.val().length > 0) {
                        item.addClass('valid')
                    } else {
                        item.removeClass('valid')
                    }
                }
                if ($form.find('.valid').length === formFields.length) {
                    $button.attr('disabled', false);
                }
            });
        });
    }
}
