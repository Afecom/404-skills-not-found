#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string text = get_string("Please provide your name: ");

    int n = 0;
    while (text[n] != '\0')
    {
        printf("%c", text[n]);
        n++;
    }
    printf("\n");
}
