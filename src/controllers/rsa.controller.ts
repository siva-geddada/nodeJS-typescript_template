import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

export interface KeyPair {
    publicKey: string;
    privateKey: string;
}

export function generateRSAKeyPair(): KeyPair {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
    });
    return { publicKey, privateKey };
}

export function encryptWithPublicKey(publicKey: string, data: string): string {
    const buffer = Buffer.from(data, "utf-8");
    const encrypt = publicEncrypt(publicKey, buffer);
    return encrypt.toString("base64");
}

export function decryptWithPrivateKey(
    privateKey: string,
    data: string,
): string {
    const buffer = Buffer.from(data, "base64");
    const decrypt = privateDecrypt(privateKey, buffer);
    return decrypt.toString("utf-8");
}
