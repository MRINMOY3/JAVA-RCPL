// C program to illustrate
// command line arguments
#include<stdio.h>

int main(int argc,char* argv[])
{
	int counter;
	printf("Program Name Is: %s",argv[0]);
	if(argc==1)
		printf("\nNo Extra Command Line Argument Passed Other Than Program Name");
	if(argc>=2)
	{
		printf("\nNumber Of Arguments Passed: %d",argc);
		printf("\n----Following Are The Command Line Arguments Passed----");
		for(counter=0;counter<argc;counter++)
			printf("\nargv[%d]: %s",counter,argv[counter]);
	}

FILE *fp ;  
    char ch ;  
    fp = fopen("file_handle.c","r") ;  
    while ( 1 )  
    {  
            ch = fgetc ( fp ) ;  
        if ( ch == EOF )  
           break ;  
printf("%c",ch) ;  
}  
fclose (fp ) ;  




}
