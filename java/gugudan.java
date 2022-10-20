import java.util.Scanner;

public class gugudan{

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
  }
}
