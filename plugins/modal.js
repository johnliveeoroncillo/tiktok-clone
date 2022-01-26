import Vue from 'vue';

export default ({ app }, inject) => {
    const bus = new Vue()
    inject("modal", {
        show(modal, options = {}) {
            console.log(modal);
            bus.$emit(`show_${modal}`, options)
        },
        hide(modal, options = {}) {
            bus.$emit(`hide_${modal}`, options)
        },
        on(event, callback) {
            bus.$on(event, (data) => {
                callback.call(this, data);
            });
        }
    });
}