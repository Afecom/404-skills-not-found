#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
    string name;
    string number;
} person;

int main(void)
{
    person people[3];

    people[0].name = "Moha AB";
    people[1].name = "Seido";
    people[2].name = "Gucci";

    people[0].number = "+251-944236501";
    people[1].number = "+251-967350632";
    people[2].number = "+251-929312611";

    string input = get_string("please input the name so that I can find you the number:  ");

    for (int i = 0; i < 3; i++)
    {
        if (strcmp(people[i].name, input) == 0)
        {
            printf("Found: %s\n", people[i].number);
            return 0;
        }
    }
    printf("Not found!\n");
}
