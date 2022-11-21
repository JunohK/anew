#!/bin/bash

a=1

while [ $a != "0" ]; do
<<<<<<< HEAD
	echo -n "Input: "
=======
	echo -n "Input : "
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
	read a

	if [ $a != "0" ]; then
		for k in 1 2 3 4 5 6 7 8 9
		do
			echo " $a * $k = `expr $a \* $k `"
		done
	fi
done
echo Exit
