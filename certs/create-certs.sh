# create a new certificate authority
openssl req -new -x509 -days 9999 -config ca.cnf -keyout ca-key.pem -out ca-crt.pem

# generate a private key for the server
openssl genrsa -out server-key.pem 4096

# generate the certificate signing request
openssl req -new -config server.cnf -key server-key.pem -out server-csr.pem

# sign the request
openssl x509 -req -extfile server.cnf -days 999 -passin "pass:password" -in server-csr.pem -CA ca-crt.pem -CAkey ca-key.pem -CAcreateserial -out server-crt.pem
