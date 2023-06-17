/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
# include<stdio.h>
# include<malloc.h>


int *twoSum(int *nums, int numsSize, int target){
    int *arr=(int *)malloc(2*sizeof(int));
    int i=0;
        while(i!=numsSize-1)
        {
            int h=i;
            for(int g=i;g<numsSize;g++)
            {
                if(nums[h]+nums[g]==target)
                {
                    arr[0]=h;
                    arr[1]=g;
                }
            }
            i++;
        }
    return arr;
}
int main()
{
    int nums[4]={1,2,3,4};
    printf("%d",twoSum(&nums[4],4,3));
 
}