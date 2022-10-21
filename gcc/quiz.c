#include <stdio.h>
#include "libcheckeod.h"

int main(){
  int x;
  printf("Input numbers : ");
  scanf("%d", &x);
  if(checkeod(x)==0){
      printf("%d is even number\n",x);
  }else {
      printf("%d is odd number\n",x);
  }
  return 0;
}
