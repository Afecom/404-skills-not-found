#include <cs50.h>
#include <stdio.h>

void calculation(int cents);

int main(void)
{
    int cents;
    do
    {
        cents = get_int("change owed: ");
    }
    while (cents < 0);

    calculation(cents);
}

void calculation(int cents)
{
    int quarters = 0;
    int dimes = 0;
    int nickels = 0;
    int pennies = 0;
    int cents1 = cents;

    while (cents1 >= 25)
    {
        quarters++;
        cents1 -= 25;
    }

    while (cents1 >= 10)
    {
        dimes++;
        cents1 -= 10;
    }

    while (cents1 >= 5)
    {
        nickels++;
        cents1 -= 5;
    }

    while (cents1 >= 1)
    {
        pennies++;
        cents1 -= 1;
    }

    int sum = quarters + dimes + nickels + pennies;
    printf("%i\n", sum);
}
