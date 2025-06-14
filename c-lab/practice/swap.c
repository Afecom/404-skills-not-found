#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b);

int main(void)
{
    int X = 10;
    int Y = 15;

    printf("The valude of X right now is %i and the value of Y is %i\n", X, Y);
    swap(&X, &Y);
    printf("The valude of X right now is %i and the value of Y is %i\n", X, Y);
}

void swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
