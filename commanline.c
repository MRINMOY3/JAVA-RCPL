#include <stdio.h>
#include <string.h>
int main(int argc,char *argv[])
{
 FILE *ifp, *ofp;
 int i, c;
 char src_file[100],dst_file[100];

 if(argc!=3) {
 printf ("Usage: ./a.out <src_file> <dst_file> \n");
 exit(0);
 }
 else {
 strcpy (src_file, argv[1]);
 strcpy (dst_file, argv[2]);
 }
25
 if ((ifp = fopen(src_file,"r")) == NULL) {
 printf ("File does not exist.\n");
 exit(0);
 }
 if ((ofp = fopen(dst_file,"w")) == NULL) {
 printf ("File not created.\n");
 exit(0);
 }
 while ((c = fgetc(ifp)) != EOF) {
 fputc (c, ofp);
 }
 fclose(ifp);
 fclose(ofp);
}