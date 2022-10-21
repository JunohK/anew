#include <stdio.h>
#include "libcheckeod.h"

int main() {
  int n;
  printf("Input number : ");
  scanf("%d",&n);
  if (checkeod(n)==0) {
    printf("%d is even number~!! \n", n);
  }else {
    printf("%d is odd number~!! \n", n);
  }
  return 0;
}
