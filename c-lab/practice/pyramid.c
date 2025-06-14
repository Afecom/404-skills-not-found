#include <cs50.h>
#include <stdio.h>

void print_row(int bricks);
void print_spaces(int spaces);

int main(void)
{
    int height;
    do
    {
        height = get_int("how High do you want the block to be? ");
    }
    while (height < 1);

    for (int j = 0; j < height; j++)
    {
        print_spaces(height - j - 1);
        print_row(j + 1);
    }
}

void print_row(int bricks)
{
    for (int i = 0; i < bricks; i++)
    {
        printf("#");
    }
    printf("\n");
}
void print_spaces(int spaces)
{
    for (int k = 0; k < spaces; k++)
    {
        printf(" ");
    }
}
