#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

string encrypt(string input, int key);
void print_ciphertext(string input);

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
        if (!isdigit(argv[1][i]))
        {
            printf("Usage: ./caesar key\n");
            return 1;
        }
    }

    // Convert argv[1] from a `string` to an `int`
    int k = atoi(argv[1]);

    // Prompt user for plaintext
    string plaintext = get_string("Plaintext:  ");

    string encrypted = encrypt(plaintext, k);
    print_ciphertext(encrypted);

    return 0;
}

string encrypt(string input, int key)
{
    // For each character in the plaintext:
    string to_be_encrypted = input;
    int text_length = strlen(to_be_encrypted);
    for (int j = 0; j < text_length; j++)
    {
        if (isupper(to_be_encrypted[j]))
        {
            to_be_encrypted[j] = ((to_be_encrypted[j] - 'A' + key) % 26) + 'A';
        }
        else if (islower(to_be_encrypted[j]))
        {
            to_be_encrypted[j] = ((to_be_encrypted[j] - 'a' + key) % 26) + 'a';
        }
        else if (!isalpha(to_be_encrypted[j]))
        {
            to_be_encrypted[j] = to_be_encrypted[j];
        }
    }
    return to_be_encrypted;
}

void print_ciphertext(string input)
{
    printf("ciphertext: %s", input);
    printf("\n");
}
