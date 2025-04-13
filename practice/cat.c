#include <stdio.h>
#include <cs50.h>

void meow(int n);
int positive(void);

int main(void)
{
    int x = positive();
    meow(x);
}

int positive(void)
{
    int n;
    do
    {
        n = get_int("How many times do I have to meow? ");
    }
    while(n < 1);
    return n;
}

void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
    printf("meow\n");
    }
}
