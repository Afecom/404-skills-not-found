#include <stdio.h>
#include <cs50.h>

void print_row(int n);

int main(void)
{
    int n = get_int("how many rows would you like to have? ");
    int x = get_int("how many columns would you like to have? ");

    // the following for loop is for the No. of rows.
    for(int i = 0; i < n; i++)
    {
        // x represents the number of columns we want when printing the rows.
        print_row(x);
    }
}

void print_row(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("#");
    }
    printf("\n");
}
