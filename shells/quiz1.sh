#!/bin/bash

<<<<<<< HEAD
echo -n "Input Woman Age : " 
read Woman
echo -n  "Input Man Age : "
read Man
if [ $Woman -lt $Man ]; then
	echo "old man"
elif [ $Woman -eq $Man ]; then
	echo "same"
else 
	echo "old Woman"
=======
man=0
woman=0
echo -n "Input Woman Age : "
read woman
echo -n "Input Man Age : "
read man

if [ $woman -gt $man ]; then
	echo "old Woman"
elif [ $woman -eq $man ]; then
	echo "same"
else
	echo "old Man"
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
fi
