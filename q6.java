// 6. WAP to find the highest mark and average mark secured by him in "5" number of 
// subjects

import java.util.*;
import java.lang.*;

public class q6
{
    public static void main(String []args)
    {
        Scanner s=new Scanner(System.in);
        int [] arr=new int[5]; 
        for(int i=0;i<5;i++)
        {
            System.out.println("Enter the marks in subject "+(i+1));
            arr[i]=s.nextInt();
        }
        int sum=0;
        for(int i=0;i<5;i++)
        {
            sum+=arr[i];
        }

        System.out.println("The total sum is = "+sum+" and the average marks is = "+sum/5);


    }
}