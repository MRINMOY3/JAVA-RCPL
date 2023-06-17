#include <stdio.h>

int main(int argc, char *argv[])
{
 FILE *fp;
 char *filename;
 char ch;

  // Check if a filename has been specified in the command
  if (argc < 2)
   {
        printf("Missing Filename\n");
        return(1);
   }
   else
  {
        filename = argv[1];
        printf("Filename : %s\n", filename);
   }

   // Open file in read-only mode
   fp = fopen(filename,"r");

   // If file opened successfully, then print the contents
   if ( fp )
    {
        printf("File contents:\n");
        while ( (ch = fgetc(fp)) != EOF )
           {
                printf("%c",ch);
           }

    }
   else
      {
         printf("Failed to open the file\n");
        }

       printf("Program name is: %s\n", argv[0]);  
   
   if(argc < 2){  
      printf("No argument passed through command line.\n");  
   }  
   else{  
      printf("First argument is: %s\n", argv[1]);  
}
}