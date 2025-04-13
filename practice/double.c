#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int money = 1;
    char ans;

    while (true)
    {
        do
        {
            ans = get_char("Do you want to double the money and pass it to the next person or keep it? "
                "right now the money is at $%i![p/k] ",
                money);
        }
        while (ans != 'p' && ans != 'k');

        if (ans == 'p')
        {
            money *= 2;
        }

        else if (ans == 'k')
        {
            if (money == 0)
            {
                printf("there has been and error (integer overflow!)\n");
            }

            else
            {
                printf("there you go with $%i!\n", money);
            }
            break;
        }
    }
}
