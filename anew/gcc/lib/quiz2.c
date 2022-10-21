#include <stdio.h>
#include "libprime.h"
void main() {
  while(1) {
  int pn;
  printf("input integer =>");
  scanf("%d", &pn);
  if(pn==0) break;
  if (prime(pn)==pn) {
    printf("%d is a prime number", pn);
  }else {
    printf("%d is not a prime number", pn);
  }
}
}
