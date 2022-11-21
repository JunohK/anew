#!/bin/bash

a=1

while [ $a != "0" ]; do
<<<<<<< HEAD
	echo -n "Input: "
	read a

	if [ $a != "0" ]; then
		for ((k=1; k<=9; k++)) do
=======
	echo -n "Input : "
	read a

	if [ $a != "0" ]; then
		for((k=1;k<=9;k++)) do
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
			echo " $a * $k = `expr $a \* $k `"
		done
	fi
done
echo Exit
