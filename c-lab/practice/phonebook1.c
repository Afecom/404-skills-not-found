#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Open a file named phonebook.csv;
    FILE *file0 = fopen("phonebook.csv", "a");

    // Check if the file is opened successfully;
    if (file0 == NULL)
    {
        printf("The file \"phonebook.csv\" could not be opened\n");
        return 1;
    }

    // Get a user input for the name and number;
    char *name = get_string("Please input the name of the person: ");
    char *number = get_string("Please input the number of the person: ");

    // Print the name and number from the user input to the file0 opened before;
    fprintf(file0, "%s, %s\n", name, number);

    // Close the file;
    fclose(file0);
}
