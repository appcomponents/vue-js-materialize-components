import Component from 'vue-class-component';

import mdIcon from '../../../components/icon';
import mdCollection from '../../../components/collection';
import mdCollectionItem from '../../../components/collection-item';

@Component({
    components: {
        mdIcon,
        mdCollection,
        mdCollectionItem
    },
    template: require('./secondary-content.html')
})
export default class SecondaryContentCollection {
    get items() {
        return {
            'Alvin1': 'javascript:void(0)',
            'Alvin2': 'javascript:void(0)',
            'Alvin3': 'javascript:void(0)',
            'Alvin4': 'javascript:void(0)'
        }
    }
}

