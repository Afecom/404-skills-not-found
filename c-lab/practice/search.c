#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string strings[] = {"Nuru", "Moha", "Seido", "Fue", "Gucci"};

    string name = get_string("Which name do you want to find please? ");

    for (int i = 0; i < 5; i++)
    {
        if (strcmp(strings[i], name) == 0)
        {
            printf("Voila, I've found the name for you!");
            return 0;
        }
    }
    printf("Oops the name you typed couldnt get found!");
}
