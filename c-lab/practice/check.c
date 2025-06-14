#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int main(int argc, string argv[])
{
    // Check if the user has typed an argument;
    if (argc != 2)
    {
        printf("Please provide a Text\n");
        return 1;
    }

    string text = argv[1];
    for (int i = 0; i < strlen(text); i++)
    {
        if (!isalpha(text[i]))
        {
            printf("the character %c is not an alphabet please provide an alphabet!\n", text[i]);
        }
    }

    for (int j = 1; j < strlen(text); j++)
    {
        if (text[j] < text[j - 1])
        {
            printf("The characters are not alphabetical!\n");
            return 2;
        }
    }

    printf("The characters yove given are alphabetical!\n");
}
