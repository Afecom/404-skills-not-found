#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Define the actual node which has the name, number and also the next node in case of collision;
typedef struct node
{
    char *name;
    char *number;
    struct node *next;
}node;

// Function Prototypes
int hash(char *name);
void insert(char *name, char *number);
void search(char *name);

// My strdup;
char *my_strdup(char *s)
{
    char *copy = malloc(strlen(s) + 1);
    if (copy != NULL)
    {
        strcpy(copy, s);
    }
    return copy;
}

// Define the size of the hash table;
const int size = 26;

// Define the hash table;
node *hash_table[size];

int main(void)
{
    // Add these contacts to the phone book (Hashtable);
    insert("Nuru", "+251-974165565");
    insert("Neima", "+251-932595845");
    insert("Seido", "+251-967350632");
    insert("Gucci", "+251-929312611");
    insert("Moha", "+251-944236501");

    // Search for this name;
    search("Nuru");
}

// A function to return us the index in the hash table fo the name input (Hashing Function);
int hash(char *name)
{
    return toupper(name[0]) - 'A';
}

// A function to insert a node to the hash table of chaining if collisions occur;
void insert(char *name, char *number)
{
    // Get the index in the hash table using the hashing function;
    unsigned int index = hash(name);

    // Create the node;
    node *n = malloc(sizeof(node));
    n->name = my_strdup(name);
    n->number = my_strdup(number);
    n->next = NULL;

    // Check if that index is not pointing to any node or key and insert it there. If not chain it;
    if (hash_table[index] == NULL)
    {
        hash_table[index] = n;
    }

    // Checker for collision;
    else
    {
        n->next = hash_table[index];
        hash_table[index] = n;
    }
}

// A function to search a name and print the number associated to that name;
void search(char *name)
{
    // Get the index for that name (hashing) it so as to search it in that index;
    int index = hash(name);

    // Get the address of the pointer in the array for that index;
    node *ptr = hash_table[index];

    // Check if the address is null and if it is return false to exit the program;
    if (ptr == NULL)
    {
        printf("The name is not in your contacts or in the hash table\n");
        return;
    }
    while (ptr != NULL)
    {
        // Checker if name is matched on the first chain of the index;
        if (strcmp(name, ptr->name) == 0)
        {
            printf("The contact is found, the number is %s!\n", ptr->number);
            return;
        }
        // If not matched then check if there is a chain;
        ptr = ptr->next;
    }

    return;
}
