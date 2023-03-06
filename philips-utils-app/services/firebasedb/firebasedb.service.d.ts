import firebase from 'firebase-admin';
export declare class FirebasedbService {
    getBackLog(): Promise<any>;
    salveRecord(_colection: any, _id: any, _data: any): Promise<firebase.firestore.WriteResult>;
    getbaclogDay(_colection: any): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>;
}
