#include<cs50.h>
#include<stdio.h>

int calculate_quarters(int cents);
int calculate_dimes(int cents);
int calculate_nickels(int cents);
int calculate_pennies(int cents);

int main(void)
{
    int cents;
    do
    {
        cents = get_int("change owed: ");
    }
    while (cents < 0);
}

//int calculate_quarters(int cents)
//{}

//int calculate_dimes(int cents)
//{}

//int calculate_nickels(int cents)
//{}

//int calculate_pennies(int cents)
//{}

