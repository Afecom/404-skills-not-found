#include <cs50.h>
#include <stdio.h>

int add(int a, int b);
int subtract(int a, int b);
int divide(int a, int b);
int multiply(int a, int b);
char get_operator(void);

int main(void)
{
    int x;
    int y;
    char z;
    x = get_int("Input the first number please: ");
    y = get_int("Input the second number please: ");
    z = get_operator();

    if (z == '+')
    {
        int sum = add(x, y);
        printf("The sum of the two numbers is %i!\n", sum);
    }
    else if (z == '-')
    {
        int difference = subtract(x, y);
        printf("The difference of the two numbers is %i!\n", difference);
    }
    else if (z == '/')
    {
        int quotient = divide(x, y);
        printf("The quotient of the two numbers is %i!\n", quotient);
    }
    else if (z == '*')
    {
        int multiple = multiply(x, y);
        printf("The multiple of the two numbers is %i!\n", multiple);
    }
    else
    {
        printf("Please only use the four basic mathematical operators!");
    }
}

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int divide(int a, int b)
{
    return a / b;
}

int multiply(int a, int b)
{
    return a * b;
}

char get_operator(void)
{
    char a;
    do
    {
        a = get_char("What do you want to do? (+, -, / or *): ");
    }
    while (a != '+' && a != '-' && a != '/' && a != '*');
    return a;
}
