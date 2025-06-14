#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const int size = 26;

// Define the data structure for arrays;
typedef struct node
{
    struct node *alphabets[size];
    char *number;
} node;

int main(void)
{
    char *name;
    printf("Your name please: ");
    scanf("%s", name);

    int len = strlen(name);

    for (int i = 0; i < len; i++)
    {
        
    }
}
