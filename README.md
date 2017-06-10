# Node HTTPS Server

Sometimes you need a local HTTPS server for things. But it's a major hassle setting one up. Now it isn't. 

Usage:
```
git clone
npm install 
npm run create-certs

# optionally, you can add the cert as a trusted root
cd certs && ./trust-ca.sh && cd ..

npm start
```

I don't actually know much about OpenSSL and other security things. So I had lots of help from these links:
https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2
https://serverfault.com/questions/845766/generating-a-self-signed-cert-with-openssl-that-works-in-chrome-58
https://derflounder.wordpress.com/2011/03/13/adding-new-trusted-root-certificates-to-system-keychain/