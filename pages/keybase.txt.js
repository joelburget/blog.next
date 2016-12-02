import React from 'react';

const txt = `
==================================================================
https://keybase.io/joelb
--------------------------------------------------------------------

I hereby claim:

  * I am an admin of http://joelburget.com
  * I am joelb (https://keybase.io/joelb) on keybase.
  * I have a public key with fingerprint D13C 898E FCCD 6148 3204  86B8 19F0 8797 075F 8C88

To do so, I am signing this object:

{
    "body": {
        "client": {
            "name": "keybase.io node.js client",
            "version": "0.7.7"
        },
        "key": {
            "fingerprint": "d13c898efccd6148320486b819f08797075f8c88",
            "host": "keybase.io",
            "key_id": "19F08797075F8C88",
            "uid": "8e53de22241ced2245b4895488e33100",
            "username": "joelb"
        },
        "merkle_root": {
            "ctime": 1425441169,
            "hash": "548289cbc4cbd817703f175571bf1daad27b38bcb448aefa969efe166031543124722ab0c68e8cc09a14ed613ab967ce773cedbb261ac1b71e811acbce88006a",
            "seqno": 170961
        },
        "service": {
            "hostname": "joelburget.com",
            "protocol": "http:"
        },
        "type": "web_service_binding",
        "version": 1
    },
    "ctime": 1425441196,
    "expire_in": 157680000,
    "prev": "32ab4c5fa43e9b9c4b2a559cb0c55068cf31e5892c8cb80c36acf19325f78016",
    "seqno": 20,
    "tag": "signature"
}

which yields the signature:

-----BEGIN PGP MESSAGE-----
Version: GnuPG v1

owFdUn9sFEUUvjtBUhsCSkAwWpsNKtFyzOzOzo/GCERSgggxlBiM1cvO7Nvrwt3u
ubtXraQmxOiJ1oaCBk0NvyopP1OrJlr1H6NEiNSokKgJSS1VE2skamIjBhtnK0T0
r3kz73vf+773ZsfsazK57KJfartnFbqfy376o8xsnNx2bKshQ7fTaN5qqJIPQZJG
gVMGo9nYAp3SiSHvh41B6EJ+c9x4GdNkdEAU+2GgUSjP8szoakrhabHnB0WIKpGf
chkuthQXHDylXIoJt0xEOJUcCw9xJhhitscV55qyPYyT/3Q1pjkLvqtfsWi5gm/h
907jq9MJDrblgmmaBCtw9WFLwoVNOAfLwgilwBiiy5Y2h1CSqdgyRFtKUIjCcNqx
Svw0j4lpE4IxFVqOE7frCs1kcqGkIkq6HDOGLA8z22ZYeth1HNdk0uJSSUK4A54j
qAAPMKXIwjaxsEmYaToSKcqBK4WEgwnoUViOFJQpYMzSuqU0KXYUlgwDxzqSCjhH
iDpafwyPBaEWx5CguCu9Rx2+glR3OrOrrVWjIiR5FZZ1WSUKk1CFJZ1rT5JKc2o7
6ayk2MdBFuLj/9AUpB+4emdXLzXt8r+RCNpkwBMVP4KCnyJsRrU+hNI+0KE5Le2S
KNtziAVCCkWk6di2nhxSto0oV56FwebCVFxJjpRFHeVhYZm2xzjC9F+jpiZNnKLm
jP1i4CTVCIyu7dmbZ2Syucy1M3Ppt81cVzf3yl+e2D7r0pzupPzUR3RM1T47ctyC
e3ZerDu39rWGphUnvr/x2EJxd73X1ruqb3z92oPrDv5ZGR59a+XEihf8+y6c7jnU
V1696s4FF14c6W079cGHO2YODK05c3Ts+sH+h1sKPd8mX/9UnbPgyd47li0vb/h8
9Du/mB0cPf/QnsVHt71SWv/V82rhmNq/t+G2pTflem9/+q7uk/e/OzQSHTCXNa57
r7rx9drLb3z58bNnfj8bzF95cad7+tHKwKF3pn544I95lxA9+c3Yg/VTr+6a35o8
M9nWMD51Q3/r8PJTu2u/DbXOmP3miZ4l5wcX/fXSpnz90mpNDHzR3Hf47C3v76m/
dSL3676RcTGs3q7rf2Tyk8U/n/sb
=E5Qe
-----END PGP MESSAGE-----

And finally, I am proving ownership of this host by posting or
appending to this document.

View my publicly-auditable identity here: https://keybase.io/joelb

==================================================================
`;

// TODO does this have to be plaintext?
export default () => <div>{txt}</div>;
