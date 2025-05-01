#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define N 50000

// A struct for a product
typedef struct product
{
    int ID;
    char name[20];
    int quantity;
    float price;
    struct product *next;
} product;

// Function prototypes;
unsigned int hash(char word[20]);
int load(void);
int insert(product *p);
int add_item(void);
int remove_item(char name[20]);
int search_item(char name[20]);
int update_item(char name[20], char prop[10]);
int update_CSV(void);
int clean(void);

product *table[N];

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf(
            "Usage: ./inventory \"feature you want to access\" i.e: add, remove, search, update\n");
        return 1;
    }

    if (strcmp(argv[1], "add") != 0 && strcmp(argv[1], "remove") != 0 &&
        strcmp(argv[1], "search") != 0 && strcmp(argv[1], "update") != 0)
    {
        printf("the keywords to features are add, remove, search or update. Please use them after "
               "./inventory !\n");
        return 6;
    }

    // Seed the randome number generator;
    srand(time(NULL));

    int ld_stat = load();
    if (ld_stat == 1 || ld_stat == 2 || ld_stat == 3)
    {
        printf("Couldn't load the database from disk to memory\n");
        return 5;
    }
    else if (ld_stat == 0)
    {
        printf("Memory initialized successfully\n");
    }

    char name[20];

    if (strcmp(argv[1], "add") == 0)
    {
        int add_stat = add_item();
        if (add_stat == 1 || add_stat == 2 || add_stat == 3)
        {
            printf("Couldnt add the product\n");
            return 4;
        }
        else if (add_stat == 0)
        {
            printf("The product was successfully created!\n");
        }
    }
    else if (strcmp(argv[1], "remove") == 0)
    {
        printf("Please type the name of the product you want to delete: ");
        scanf("%s", name);
        int rem_status = remove_item(name);

        if (rem_status == 1 || rem_status == 2)
        {
            printf("Couldn't delete the product\n");
            return 2;
        }
    }
    else if (strcmp(argv[1], "search") == 0)
    {
        printf("Please type the name of the product you want to search: ");
        scanf("%s", name);
        // Get a status indicator from the search function;
        int srch_stat = search_item(name);

        // Check stats;
        if (srch_stat == 1 || srch_stat == 3)
        {
            return 3;
        }
    }

    else if (strcmp(argv[1], "update") == 0)
    {
        char prop[10];

        printf("Please type the name of the product you want to update: ");
        scanf("%s", name);
        printf("Please type the property of the product you want to update| name, quantity or "
               "price: ");
        scanf("%s", prop);
        int updt_stat = update_item(name, prop);

        if (updt_stat == 1 || updt_stat == 2)
        {
            printf("couldn't update the product\n");
            return 5;
        }
    }

    // Update the CSV file with the current data in the memory;
    int updt_stat = update_CSV();

    if (updt_stat == 1 || updt_stat == 2)
    {
        printf("Couldnt update the CSV file\n");
        return 8;
    }

    // Free the memory when the program is done;
    int cln_stat = clean();
    if (cln_stat == 1)
    {
        printf("an error occured when freeing the memory\n");
        return 7;
    }
    else if (cln_stat == 0)
    {
        printf("Successfully cleaned up the memory and did want you want me to do!\n");
        return 0;
    }
}

unsigned int hash(char word[20])
{
    unsigned long hash = 5381;
    int c;

    while ((c = tolower(*word++)))
    {
        hash = ((hash << 5) + hash) + c; // hash * 33 + c
    }

    return hash % N; // N is the number of buckets
}

// A function to insert a product to the hash table;
int insert(product *p)
{
    if (p == NULL)
    {
        printf("Couldnt get the memory address for the product\n");
        return 1;
    }

    // hash the product based on its name;
    unsigned int index = hash(p->name);

    p->next = table[index];
    table[index] = p;

    return 0;
}

// Load the hash table with existing csv database;
int load(void)
{
    // open the CSV file;
    FILE *file = fopen("products.csv", "r");
    if (file == NULL)
    {
        printf("couldnt open the database file\n");
        return 1;
    }

    // Parse the CSV file line by line;
    char line[256];
    while (fgets(line, sizeof(line), file))
    {
        product *p = malloc(sizeof(product));
        if (p == NULL)
        {
            printf("Couldnt allocate memory for the product\n");
            fclose(file);
            return 2;
        }

        // Tokenize the line using the commas in the CSV so as to use the values as tokens;
        char *token = strtok(line, ",");
        if (token)
            p->ID = atoi(token);

        token = strtok(NULL, ",");
        if (token)
            strcpy(p->name, token);

        token = strtok(NULL, ",");
        if (token)
            p->quantity = atoi(token);

        token = strtok(NULL, ",");
        if (token)
            p->price = atof(token);

        p->next = NULL;

        // Insert the created product to the hash table;
        int ins_stat = insert(p);

        if (ins_stat == 1)
        {
            return 3;
        }
    }

    fclose(file);
    return 0;
}

int add_item(void)
{
    product *n = malloc(sizeof(product));
    if (n == NULL)
    {
        printf("No space in memory\n");
        return 1;
    }

    n->ID = rand() % 200;
    printf("Name of the product please: ");
    scanf("%s", n->name);
    printf("Quantity of that product please: ");
    scanf("%i", &n->quantity);
    printf("Price of the product please: ");
    scanf("%f", &n->price);

    n->next = NULL;

    // Insert the product to the hash table
    int ins_stat = insert(n);

    if (ins_stat == 1)
    {
        return 2;
    }
    else if (ins_stat == 0)
    {
        return ins_stat;
    }

    printf("couldn't add the product! DNW");
    return 3;
}

int remove_item(char name[20])
{
    unsigned int index = hash(name);
    product *ptr = table[index];
    product *prv = NULL;

    while (ptr != NULL)
    {
        if (strcmp(ptr->name, name) == 0)
        {
            if (prv == NULL)
            {
                table[index] = ptr->next;
            }
            else if (prv != NULL)
            {
                prv->next = ptr->next;
            }

            free(ptr);
            printf("Successfully deleted the product %s", name);
            return 0;
        }
        prv = ptr;
        ptr = ptr->next;
    }

    printf("Couldnt find the product you want to delete!\n");
    return 2;
}

int search_item(char name[20])
{
    // Hash the name so as to get the bucket where the product seats;
    unsigned int index = hash(name);
    // Initialize a pointer which points to the first product in the chained list;
    product *ptr = table[index];

    while (ptr != NULL)
    {
        if (strcmp(ptr->name, name) == 0)
        {
            printf("Successfully found the product you are searching for:\n\n");
            printf("ID: %i\n", ptr->ID);
            printf("Name: %s\n", ptr->name);
            printf("Quantity: %i\n", ptr->quantity);
            printf("Price: %f\n", ptr->price);

            return 0;
        }
        // Update the ptr to point to the next product
        ptr = ptr->next;
    }

    printf("Couldn't get the product\n");
    return 3;
}

int update_item(char name[20], char prop[10])
{
    unsigned int index = hash(name);

    product *ptr = table[index];
    while (ptr != NULL)
    {
        if (strcmp(ptr->name, name) == 0)
        {
            if (strcmp(prop, "name") == 0)
            {
                printf("New name please: ");
                scanf("%s", ptr->name);
                return 0;
            }
            else if (strcmp(prop, "quantity") == 0)
            {
                printf("New quantity please: ");
                scanf("%i", &ptr->quantity);
                return 0;
            }
            else if (strcmp(prop, "price") == 0)
            {
                printf("New price please: ");
                scanf("%f", &ptr->price);
                return 0;
            }
            else
            {
                printf("didn't got the correct property to update");
                return 1;
            }
        }

        ptr = ptr->next;
    }

    printf("couldn't get the product in the memory!\n");
    return 2;
}

int update_CSV(void)
{
    FILE *file = fopen("products.csv", "w");
    if (file == NULL)
    {
        printf("Couldn't open the database/CSV file\n");
        return 1;
    }

    for (int i = 0; i < N; i++)
    {
        product *ptr = table[i];
        while (ptr != NULL)
        {
            fprintf(file, "%i,%s,%i,%f\n", ptr->ID, ptr->name, ptr->quantity, ptr->price);
            ptr = ptr->next;
        }
    }

    fclose(file);
    printf("Updated the CSV database file completely!\n");
    return 0;
}

int clean(void)
{
    for (int i = 0; i < N; i++)
    {
        product *ptr = table[i];
        while (ptr != NULL)
        {
            product *tmp = ptr;
            ptr = ptr->next;
            free(tmp);
        }
        table[i] = NULL;
    }

    printf("Completely freed all memory successfully!\n");
    return 0;
}
