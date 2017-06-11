# Node HTTPS Server Starter

Sometimes you need a local HTTPS server for things. But it's a major hassle setting one up. Now it isn't. 

Usage:
```
# Set things up
git clone
npm install 

# Create a CA and sign a server certificate
npm run create-certs

# Optionally, you can add the CA cert as a trusted root
# This makes it so that `curl` trusts your site without doing anything special 
# Doing still won't make most browsers trust your cert, so you'll still have to click through warnings
cd certs && ./trust-ca.sh && cd ..

# start a server at port 4433 (or whatever process.env.PORT is)
npm start
```


I don't actually know much about OpenSSL and other security things. So I had lots of help from these links:
https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2
https://serverfault.com/questions/845766/generating-a-self-signed-cert-with-openssl-that-works-in-chrome-58
https://derflounder.wordpress.com/2011/03/13/adding-new-trusted-root-certificates-to-system-keychain/
