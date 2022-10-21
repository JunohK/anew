int prime (int pn) {
  int i;
  for(i=2; i<=pn; i++) {
    if (pn%i ==0)
      break;
    else
      continue;
  }
    return i;
}
