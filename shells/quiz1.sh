#!/bin/bash

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
fi
