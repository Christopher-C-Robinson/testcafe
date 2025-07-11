declare module 'openssl-self-signed-certificate' {
    interface Certificate {
        key: Buffer;
        cert: Buffer;
    }

    const value: Certificate;
    export = value;
}
