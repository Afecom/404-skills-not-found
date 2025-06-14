#include <stdio.h>

int main(void)
{
    char *greeting = "Hi!";

    printf("%c", *greeting);
    printf("%c", *(greeting + 1));
    printf("%c\n", *(greeting + 2));
}
