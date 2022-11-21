#!/bin/bash

a=0

echo -n "Input : "
<<<<<<< HEAD
read a 
=======
read a
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425

if [ $a -ge 90 ]; then
	echo A
elif [ $a -ge 80 ]; then
	echo B
elif [ $a -ge 70 ]; then
	echo C
elif [ $a -ge 60 ]; then
	echo D
else
	echo F
fi
echo "Thank you~ bye!"
