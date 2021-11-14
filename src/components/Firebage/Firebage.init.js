
import firebaseConfig from './Firebage.config';
import { initializeApp } from 'firebase/app';


const initialigeAuthentiaction = () => {

    initializeApp(firebaseConfig);
}
export default initialigeAuthentiaction;