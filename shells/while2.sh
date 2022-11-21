#!/bin/bash

row=$1

<<<<<<< HEAD
if [ $# -q 0]; then
=======
if [ $# -eq 0 ]; then
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
	echo "This program is have to one parameter~!!"
else
	while [[ 10 -gt $row ]]; do
		echo $row
<<<<<<< HEAD
		row=`echo "$row"+1|bc`
=======
		row=`echo "$row"+1 | bc`
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
	done
fi
