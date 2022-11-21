#!/bin/bash

input="user.dat"
while IFS=',' read -r username userid groupid comment
do
	echo "Adding $username"
<<<<<<< HEAD
	useradd -u "$userid" -g "$groupid" -c "$comment" -m  "$username"
=======
	useradd -u "$userid" -g "$groupid" -c "$comment" -m "$username"
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
done < $input
