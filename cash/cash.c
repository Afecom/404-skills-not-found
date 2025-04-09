#include<cs50.h>
#include<stdio.h>

int calculation(int cents);

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

int calculation(int cents)
{
    int quarters = 0;
    while (cents >= 25)
    {
        quarters++;
        cents -= 25;
    }
    return quarters;

    int dimes = 0;
    while (cents >= 10)
    {
        dimes++;
        cents -= 10;
    }
    return dimes;

    int nickels = 0;
    while (cents >= 5)
    {
        nickels++;
        cents -= 5;
    }
    return nickels;

    int pennies = 0;
    while (cents >= 1)
    {
        pennies++;
        cents--;
    }
    return pennies;

    int sum = quarters + dimes + nickels + pennies;

    
}

