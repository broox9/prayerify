import {observable} from 'mobx';

class AppStore {
  @observable msg = 'brookes wuz here';
}



export default new AppStore();