#include <stdio.h>

const int n = 5

int main(void)
{
    int nums[n];
    nums[0] = 1;

    for (int i = ; i < 0; i++)
    {
        nums[i] = nums[i - 1] * 2;
        printf("%i", nums[i]);
    }
}
