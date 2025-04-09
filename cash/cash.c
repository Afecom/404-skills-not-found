#include<cs50.h>
#include<stdio.h>

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

void calculation(int cents1)
{
    int quarters = 0;
    int dimes = 0;
    int nickels = 0;
    int pennies = 0;

    while (cents1 >= 25)
    {
        quarters++;
        cents1 -= 25;
    }
    printf("%i\n", quarters);
}

