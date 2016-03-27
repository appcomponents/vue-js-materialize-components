import Component from 'vue-class-component';

import mdPagination from '../../../components/pagination';

@Component({
    components: {
        mdPagination
    },
    template: require('./default.html')
})
export default class DefaultPagination {
    data() {
        return {
            page: 0
        }
    }
}

