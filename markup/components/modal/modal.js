import $ from 'jquery';

export default class Modal {
    constructor(opts) {
        this.$body = $('body');
        this.$modal = $('#modal');
        this.$close = this.$modal.find('.modal__close');
        this.$content = this.$modal.find('.modal__content');
        $.extend(this, opts);
    }

    init() {
        $('[data-open]').on('click', (e) => this.elementToOpen(e));
        this.close();
    };

    elementToOpen(e) {
        e.preventDefault();
        e.stopPropagation();

        const $target = $(e.target);
        const $dataHTML = $target.attr('data-html');

        this.openModal($dataHTML);
    }

    close() {
        // this.closeModal();
        this.$close.on('click', () => this.closeModal());
    };

    openModal(dataHTML) {
        fetch(`${location.origin}/${dataHTML}.html`)
            .then(response => response.text())
            .then(text => {
                this.$modal.addClass(`modal-${dataHTML}`);
                $(text).appendTo(this.$content);
            })
            .catch(e => e.message)
            .finally(() => {
                this.$body.addClass('modal-is-open');
                this.$modal.parent()
                    .fadeIn()
                    .css('display', 'flex')
                    .css('overflowY', 'auto');
            });
    };

    closeModal() {
        this.$body.removeClass('modal-is-open');
        this.$modal.parent()
            .fadeOut()
            .css('overflowY', 'hidden');
        this.$content.empty();
    }
}


