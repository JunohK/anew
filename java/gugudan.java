import java.util.Scanner;

public class gugudan{

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
  }
}
