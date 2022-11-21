import java.util.Scanner;

public class gugudan{

<<<<<<< HEAD
public static void main(String[] arg) {
  int number;
 Scanner sc=new Scanner(System.in);

  while(true) {
    System.out.println("Insert number :");
    number=sc.nextInt();

    if(number==0) {
      break;
    }else if(number>=2 && number<=9) {
      for(int i=1; i<=9; i++) {
        System.out.println(number+"x"+i+"="+number*i);
      }
    }else {
      System.out.println("Insert number 2~9. Retype Again~!!\n");
    }
    }
=======
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
        while(true) {
        System.out.print("Insert number(0:exit) : ");
        int a = sc.nextInt();
          if(a==0) {
            break;
          } else if(a>1 && a<10){
            for(int i=1;i<10;i++) {
                System.out.println(a + "*" + i + "=" + (a*i));
              }
          } else {
            System.out.println("Insert number 2~9. Retype Again~!!\n");
          }
      }
>>>>>>> e0096d113df2eeb29a9e1019698c735ffb1c7425
  }
}
