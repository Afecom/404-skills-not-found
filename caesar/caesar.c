#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int converter(string input, int key);

int main(int argc, string argv[])
{
    // Make sure program was run with just one command-line argument
    if (argc != 2)
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    // Make sure every character in argv[1] is a digit
    int text_length = strlen(argv[1]);
    for (int i = 0; i < text_length; i++)
    {
        if(!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    // Convert argv[1] from a `string` to an `int`
    int k = atoi(argv[1]);

    // Prompt user for plaintext
    string plaintext = get_string("Plaintext:  ");

    converter(plaintext, k);
}


int converter(string input, int key)
{
    // For each character in the plaintext:
    int text_length = strlen(input);
    for (int j = 0; j < text_length; j++)
    {
        if (isupper(input[j]))
        {
            input[j] = ((input[j] - 'A' + key) % 26) + 'A';
        }
        else if (islower(input[j]))
        {
            input[j] = ((input[j] - 'a' + key) % 26) + 'a';
        }
    }
    printf("ciphertext: %s", input);
    printf("\n");
    return 0;
}


