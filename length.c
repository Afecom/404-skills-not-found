#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string text = get_string("Please provide a text: ");
    printf("%c", text[0]);
}
