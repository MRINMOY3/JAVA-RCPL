#include<stdio.h>
# define file_size 1000
int main(int argc,char *argv[])
{
    FILE *fp;
    char c;
    fp = fopen(argv[1], "r");
    if(fp)
    {
        printf("The file is opened for write operation\n");
    }
    if(!fp)
    {
        printf("The file is not opened\n");
    }
    char str[file_size];
    printf("Enter a sentence \n");
    scanf("%s",str);


   char string[50];
   int i,vowel=0,digit=0,space=0,consonant=0,specialchar=0;
   for (c = getc(fp); c != EOF; c = getc(fp))
{
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
    {
      if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
      {
        vowel++;
      }

      else
         consonant=consonant+1;

    }
      //checking the char is vowel vowel=vowel+1;
      else if(c=='0'||c=='1'||c=='2'||c=='3'||c=='4'||c=='5'||c=='6'||c=='7'||c=='8'||c=='9')
      {
        digit=digit+1;
      }
      else if(c==' ')
         space=space+1;

    else
    {
        specialchar++;
    }
      
   }
   printf("\n--vowel=%d digit=%dspace=%dconsonant=%dspecialchar=%d--\n",vowel,digit,space,consonant,specialchar);
   return 0;
}