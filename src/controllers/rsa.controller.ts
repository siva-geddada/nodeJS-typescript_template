import { cleanKey, generateRSAKeyPair } from "../middleware/rsa.helpers";

let keyPair: any;

export const rsaCtrl = {
    generatePublicKey: (req: any, res: any) => {
        if (!keyPair) {
            keyPair = generateRSAKeyPair();
        }
        return res.status(200).json({ publicKey: cleanKey(keyPair.publicKey) });
    },

    generatePrivateKey: (req: any, res: any) => {
        if (!keyPair) {
            keyPair = generateRSAKeyPair();
        }
        return res
            .status(200)
            .json({ privateKey: cleanKey(keyPair.privateKey) });
    },
};
