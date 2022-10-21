#!/bin/bash

if [ $# -eq 0 ]; then
	echo "Your entry is not in the list"
else
	case "$1" in
		ko)
			echo "Seoul" ;;
		us)
			echo "Washington" ;;
		cn)
			echo "Beijing" ;;
		jp)
			echo "Tokyo" ;;
		*)
			echo "Enter the contry name~!!" ;;
	esac
fi
