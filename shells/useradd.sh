#!/bin/bash

i=1
uid=$1
cnt=$2

while [ $i -le $cnt ]; do
	let uid+=1
	useradd -u $uid -g users user$i
<<<<<<< HEAD
	passwd -d user$1
=======
	passwd -d user$i
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
	let i+=1
done
echo Complete!!
