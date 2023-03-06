"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebasedbService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
let FirebasedbService = class FirebasedbService {
    async getBackLog() {
        return await firebase_admin_1.default
            .firestore()
            .collection('dashbacklog')
            .get()
            .then((querySnapshot) => {
            return querySnapshot.docs.map((doc) => {
                return doc.data();
            });
        });
    }
    async salveRecord(_colection, _id, _data) {
        return await firebase_admin_1.default
            .firestore()
            .collection(_colection)
            .doc(_id)
            .set(_data, { merge: true });
    }
    async getbaclogDay(_colection) {
        return await firebase_admin_1.default
            .firestore()
            .collection(_colection)
            .where('TOTAL', '>', 60)
            .get();
    }
};
FirebasedbService = __decorate([
    (0, common_1.Injectable)()
], FirebasedbService);
exports.FirebasedbService = FirebasedbService;
//# sourceMappingURL=firebasedb.service.js.map