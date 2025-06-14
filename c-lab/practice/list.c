#include <stdio.h>
#include <stdlib.h>

// Define the node;
typedef struct node
{
    int num;
    struct node *next;
} node;

// Function prototypes;
void insert(int nums[], int size);
void print(node *list);

// Initialize the memory which points to the first node;
node *list = NULL;

int main(void)
{
    // Get the size of the list from the user;
    int size;
    printf("How big do you want the size of the list to be? ");
    scanf("%i", &size);

    // Define the array for the numbers of the nodes;
    int nums[size];

    // Prompt the user to type the numbers based on the size and slap them in the array;
    for (int i = 0; i < size; i++)
    {
        printf("Number please: ");
        scanf("%i", &nums[i]);
    }

    // Call the functions and pass the necessary args;
    insert(nums, size);
    print(list);
}

void insert(int nums[], int size)
{
    // Creates the nodes and assign the int values from the array;
    for (int i = 0; i < size; i++)
    {
        node *n = malloc(sizeof(node));
        n->num = nums[i];
        n->next = NULL;

        if (list == NULL)
        {
            list = n;
        }

        else
        {
            for (node *ptr = list; ptr != NULL; ptr = ptr->next)
            {
                if (n->num < list->num)
                {
                    n->next = list;
                    list = n;
                    break;
                }

                else if (ptr->next == NULL)
                {
                    ptr->next = n;
                    break;
                }

                else if (n->num < ptr->next->num)
                {
                    n->next = ptr->next;
                    ptr->next = n;
                    break;
                }
            }
        }
    }
}

void print(node *first)
{
    node *ptr = first;
    if (ptr == NULL)
    {
        printf("There is no any kind of list to print\n");
        return;
    }

    while (ptr != NULL)
    {
        printf("%i\n", ptr->num);
        ptr = ptr->next;
    }

    return;
}
