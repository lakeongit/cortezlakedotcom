#!/bin/bash

### Replace 'ami-0abcdef1234567890', 'MyKeyPair', 'sg-903004f8', 'subnet-6e7f829e', and 'ec2-198-51-100-1.compute-1.amazonaws.com' with your actual values.



# create a new EC2 instance
aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-903004f8 --subnet-id subnet-6e7f829e

# connect to the instance
ssh -i "MyKeyPair.pem" ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com

# update the package lists
sudo yum update -y

# install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

# install your app
git clone https://github.com/lakeongit/cortezlakedotcom.git
cd cortezlakedotcom
npm install

# start your app
npm start


