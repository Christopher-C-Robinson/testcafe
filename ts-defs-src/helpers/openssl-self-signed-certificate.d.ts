declare module 'openssl-self-signed-certificate' {
    const cert: { key: string | Buffer; cert: string | Buffer };
    export default cert;
}
