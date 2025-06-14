#include <cs50.h>
#include <stdio.h>

void print_rows(int bricks);
void print_spaces(int spaces);

int main(void)
{
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1);

    for (int i = 0; i < height; i++)
    {
        print_spaces(height - i - 1);
        print_rows(i + 1);
    }
}

void print_rows(int bricks)
{
    for (int j = 0; j < bricks; j++)
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
