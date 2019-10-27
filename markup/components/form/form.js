import $ from "jquery";
import 'jquery-mask-plugin';

export default class Form {
    constructor(opts) {
        this.$loading = $('#loading');

        $.extend(this, opts);
    };

    init() {
        const form = $('#consultation');
        const labelPhone = form.find($('[name="user_phone"]'));

        $('[name="user_phone"]').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___-__-__"});

        console.warn(labelPhone);

        labelPhone.blur(() => {
            if (this.validatePhone(labelPhone)) {
                // labelPhone.css('border-color', 'green');
                console.warn('valid');
            }
            else {
                // $('#spnPhoneStatus').html('Invalid');
                // $('#spnPhoneStatus').css('color', 'red');
                labelPhone.css('border-color', 'red');
                console.warn('Invalid');
            }
        });

    }
    validatePhone(selectorPhone) {
        const filter = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        let phoneValue = $(selectorPhone).val();
        return (filter.test(phoneValue)) ? true : false;
    }
}
