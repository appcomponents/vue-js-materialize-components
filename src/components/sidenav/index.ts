import Component from 'vue-class-component';

import mdSidenavOverlay from '../sidenav-overlay';

const ESC = 27;

@Component({
    props: {
        closeOnClick: {
            type: Boolean,
            required: false,
            'default': false
        },
        active: {
            type: Boolean,
            required: false,
            'default': false
        },
        showActive: {
            type: Boolean,
            required: false,
            'default': false
        },
        fixed: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    events: {
        'sidenav::open': function () {
            this.open();
        },
        'sidenav::close': function () {
            this.$nextTick(this.close); // delay close due events
        },
        'nav-item::activated': function (id) {
            this.$broadcast('nav-item::activated', id);
        }
    },
    components: {
        mdSidenavOverlay
    },
    template: require('./sidenav.html')
})
export default class SideNav {
    private active: boolean;
    private fixed: boolean;
    private closeOnClick: boolean;

    ready() {
        this.active = this.fixed || this.active;
        if (!this.fixed) {
            window.document.addEventListener('keydown', (evt: any) => {
                evt = evt || window.event;
                if (evt.keyCode == ESC) {
                    this.close();
                }
            });
        }
    }

    get computedStyle() {
        if (this.active) {
            return {
                left: 0
            }
        }
        return null;
    }

    open() {
        if (!this.active) {
            this.active = true;
        }
    }

    close() {
        if (this.active) {
            this.active = false;
        }
    }

    closeIfNecessary() {
        if (this.closeOnClick) {
            this.close();
        }
    }
}