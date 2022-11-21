#include <stdio.h>
#include "libcheckprime.h"

void main(){
  while(1){
    int x;
    printf("\nInput integer => ");
    scanf("%d", &x);
    if(x==0) break;
    if(checkprime(x)==x){
      printf("%d is a prime number\n",x);
    }else {
      printf("%d is not prime number\n",x);
    }
  }
}
