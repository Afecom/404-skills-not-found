#include <cs50.h>
#include <stdio.h>

typedef struct{
    string name;
    int votes;
}  candidate;

int main(void)
{
    const int num = 3;
    candidate lists[num];

    for (int i = 0; i < num; i++)
    {
        lists[i].name = get_string("Name %i: Please type the name of the candidate: ", i);
        lists[i].votes = get_int("Vote: Please enter the number of votes for this candidate: ");
    }

    int vote_counter = 0;
    for (int j = 0; j < num; j++)
    {
        if (lists[j].votes > vote_counter)
        {
            vote_counter = lists[j].votes;
        }
    }

    for (int k = 0; k < num; k++)
    {
        if (lists[k].votes == vote_counter)
        {
            printf("The winner of the election is %s\n", lists[k].name);
        }
    }
}
