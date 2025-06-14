#include <cs50.h>
#include <stdio.h>

void print_rows(int bricks);
void print_spaces(int spaces);
void printmore_spaces(void);
void pyramid_kind(int bricks2);

int main(void)
{
    int height;
    do
    {
        height = get_int("Height \(1-8): ");
    }
    while (height < 1 || height > 8);

    for (int i = 0; i < height; i++)
    {
        print_spaces(height - i - 1);
        print_rows(i + 1);
        printmore_spaces();
        pyramid_kind(i + 1);
    }
}

void print_rows(int bricks)
{
    for (int j = 0; j < bricks; j++)
    {
        printf("#");
    }
}

void print_spaces(int spaces)
{
    for (int k = 0; k < spaces; k++)
    {
        printf(" ");
    }
}

void printmore_spaces(void)
{
    printf("  ");
}

void pyramid_kind(int bricks2)
{
    for (int l = 0; l < bricks2; l++)
    {
        printf("#");
    }
    printf("\n");
}
