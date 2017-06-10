# add to Keychain
sudo security add-trusted -d -r trustRoot -k "/Library/Keychains/System.keychain" ./ca-crt.pem
