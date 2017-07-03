import {observable, action} from 'mobx';
import io, {auth, db} from '../util/firebase';

class AppStore {
  @observable user = auth.currentUser;

  @observable prayers = {};

  @action signIn({pwd, uid}) {
    auth.signInWithEmailAndPassword(uid, pwd)
      .then(user =>  {
        this.user = user;
        // this.getPrayers()
        console.log('Signed In', user);
      })
      .catch( error => console.log('SIGN IN ERR', error));
  }

  @action signOut() {
    auth.signOut().then( rtn => console.log("Signed Out", rtn))
    this.prayers = {};
  }

  @action setUser(user) {
    this.user = user;
  }

  // prayers
  @action getPrayers() {
    return this.prayers;
  }
  
  @action submitPrayer(prayer) {
    console.log('prayer', prayer);
  }
}

db.ref('/prayers').on('value', (snapShot) => {
  console.log('REFS', snapShot.val() instanceof Array);
  appStore.prayers = snapShot.val();
})

const appStore = new AppStore();
export default appStore;