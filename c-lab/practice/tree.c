#include <stdio.h>
#include <stdlib.h>

// Define the tree node struct;
typedef struct node
{
    int value;
    struct node *right;
    struct node *left;
} node;

// Function prototypes;
node *insert(node *root, int num);
void print_in_order(node *root);

// Initialize the pointer to the root to NULL so that it will not point to any garbage value;
node *tree = NULL;

int main(void)
{
    tree = insert(tree, 10);
    tree = insert(tree, 6);
    tree = insert(tree, 12);
    tree = insert(tree, 15);
    tree = insert(tree, 4);
    tree = insert(tree, 11);

    print_in_order(tree);

    return 0;
}

// A function to insert nodes to the appropriate locations in the tree;
node *insert(node *root, int num)
{
    // Base case;
    if (root == NULL)
    {
        node *n = malloc(sizeof(node));
        if (n != NULL)
        {
            n->value = num;
            n->right = NULL;
            n->left = NULL;
            return n;
        }
    }

    // Check if the value is less than the value in any top layer nodes and set the immediate node before the actual node's left pointer to point to the node with the passed value;
    else if (num < root->value)
    {
        root->left = insert(root->left, num);
    }

    else if (num > root->value)
    {
        root->right = insert(root->right, num);
    }

    return root;
}

void print_in_order(node *root)
{
    if (root == NULL)
    {
        return;
    }
    print_in_order(root->left);
    printf("%d\n", root->value);
    print_in_order(root->right);
}
